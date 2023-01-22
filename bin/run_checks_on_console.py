#!/usr/bin/env python3

""" This python module will run the checks from src/config.js and produce output on the
    console.  If all checks complete successfully, the return code will be 0 (success) --
    otherwise, it will be 1 (error).  This makes it suitable for use from a cron job.

    Requirements:
      pip3 install regex requests pyyaml termcolor

    Example usage from cron (checks every five minutes, emails full report on failure):
      SHELL=/bin/bash
      */5 * * * *  output=$(/path/to/run_checks_on_console.py -g) || echo "$output"
"""

import argparse
import sys
import textwrap

import regex
import requests
import yaml
from termcolor import colored as _colored


LINE_LENGTH = 80


def colored(text, *args, **kwargs):
    if sys.stdout.isatty():
        return _colored(text, *args, **kwargs)
    return text


def get_config_from_github():
    """Fetch the latest config from GitHub -- useful so that the script/repo doesn't have
    to be re-deployed if config checks are added/changed/deleted."""

    config_url = "https://raw.githubusercontent.com/ADHO/adho-status/main/src/config.js"
    response = requests.get(config_url)

    return response.text


def parse_config(config):
    """Get the JavaScript object from the config file, and parse it to a python
    dictionary.  (Note: it's **not** JSON, hence the need for pyyaml.)"""

    services_object_regex = regex.compile(r"services\s*=\s*(\{(?:[^{}]|(?1))*\})")
    checks = services_object_regex.search(config)

    return yaml.safe_load(checks.group(1))


def test_response_for_text(response, service_config):
    if service_config["matchText"] not in response.text:
        print(response.text, file=sys.stderr)
    return service_config["matchText"] in response.text


def test_response_code_200(response, service_config):
    return response.status_code == 200


def test_response_against_regex(response, service_config):
    def parse_regex(js_regex):
        """This is adequate for now, but this function may need to be upgraded to
        deal with flags and/or with differences between Regex syntax in Python
        and Javascript (see https://pypi.org/project/js-regex/)."""
        return js_regex[1:-1]

    reg = regex.compile(parse_regex(service_config["regex"]))
    return reg.search(response.text)


def do_check(check):
    notice = f"Checking {check['displayName']}..."
    print(notice, end=" ", flush=True)

    try:
        response = requests.get(check["endpointUrl"])
        response.encoding = "utf-8"

        test = {
            "testResponseForText": test_response_for_text,
            "testResponseAgainstRegex": test_response_against_regex,
            "testResponseCode200": test_response_code_200,
        }[check["test"]](response, check)

        if response.status_code == 200 and test:
            response_text = "✔ 200 Okay!"
            print(
                " " * (LINE_LENGTH - len(notice) - 2 - len(response_text)),
                colored(response_text, "green", attrs=["bold"]),
            )
            return True

        response_text = (
            f"✘ {response.status_code} (content test {('failed', 'passed')[test]})"
        )
    except requests.exceptions.RequestException as exc:
        response_text = (
            " " * (LINE_LENGTH - len(notice) - 2 - len("✘ Failed!"))
            + "✘ Failed!\n"
            + textwrap.indent(
                "\n".join(
                    textwrap.fill(line, LINE_LENGTH - 3) + ":"
                    for line in str(exc).split(":")
                ),
                " > ",
            )
        )

    print(
        " " * (LINE_LENGTH - len(notice) - 2 - len(response_text)),
        colored(response_text, "red", attrs=["bold"]),
    )
    return False


def do_section(checks):
    heading = checks["heading"]
    deco = "=" * int(LINE_LENGTH - len(heading) - 6)
    print(colored(f"\n==== {heading} {deco}", "yellow", attrs=["bold"]))
    return sum(not do_check(check) for check in checks["services"].values())


def main():
    """Command-line entry-point."""
    parser = argparse.ArgumentParser(description="Description: {}".format(__file__))

    parser.add_argument(
        "-g",
        "--get-config-from-github",
        action="store_true",
        default=False,
        help="Get the config.js file from the GitHub repository",
    )

    args = parser.parse_args()

    if args.get_config_from_github:
        config_contents = get_config_from_github()
    else:
        with open("../src/config.js", "r") as _fh:
            config_contents = _fh.read()

    config = parse_config(config_contents)

    if sum(do_section(checks) for checks in config.values()):
        raise SystemExit(1)

    raise SystemExit(0)


if __name__ == "__main__":
    main()
