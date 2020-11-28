#!/usr/bin/env python3

""" This python module will run the checks from src/config.js and produce output on the
    console.  If all checks complete successfully, the return code will be 0 (success) --
    otherwise, it will be 1 (error).  This makes it suitable for use from a cron job. """

import argparse

import regex
import requests
import yaml
from termcolor import colored


def get_config_from_github():
    config_url = "https://raw.githubusercontent.com/ADHO/adho-status/main/src/config.js"
    response = requests.get(config_url)

    return response.text


def parse_config(config):
    services_object_regex = regex.compile(r"services\s*=\s*(\{(?:[^{}]|(?1))*\})")
    checks = services_object_regex.search(config)

    return yaml.safe_load(checks.group(1))


def do_check(check):
    print(f"Checking {check['displayName']}...")
    response = requests.get(check["endpointUrl"])

    if response.status_code == 200 and check["matchText"] in response.text:
        print(colored("✔ 200 Okay!", "green", attrs=["bold"]))
        return True

    print(colored(f"✘ {response.status_code}", "red", attrs=["bold"]))
    return False


def main():
    """ Command-line entry-point. """
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
        config = get_config_from_github()
    else:
        with open("../src/config.js", "r") as _fh:
            config = _fh.read()

    checks = parse_config(config)

    if sum(not do_check(check) for check in checks.values()):
        raise SystemExit(1)

    raise SystemExit(0)


if __name__ == "__main__":
    main()
