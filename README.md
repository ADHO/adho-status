[![Tests](https://github.com/ADHO/adho-status/workflows/Tests/badge.svg)](https://github.com/ADHO/adho-status/actions?query=workflow%3ATests)
[![codecov](https://codecov.io/gh/ADHO/adho-status/branch/main/graph/badge.svg)](https://codecov.io/gh/ADHO/adho-status)

# ADHO Status Dashboard

A lightweight dashboard for displaying the status of ADHO-supported infrastructure.

Also included is a [python script](bin/run_checks_on_console.py) that reads the same [config file](src/config.js) and runs the checks from a command-line interface. This script has been written to be suitable for use from `cron` or other schedulers (preferably on an always-up server unconnected to the ones that run the services being checked, but it can also be run on a workstation) -- see the script for details.

## Run Locally

1. `git clone` this repository

### Live Updating Development Build

1. `yarn`
1. `yarn dev` (This will run the development server and reflect your changes to the page as you save files)
1. Visit `localhost:1234` in your browser

### Static Build

1. `yarn build` for a development build (with sourcemaps), `yarn build:production` for a production build
1. Visit `dist/` using an http server

## Linting and Testing

- `yarn lint` to run eslint
- `yarn test` to run jest
- `yarn coverage` to run code coverage check

## Deploy to GH Pages

1. `yarn gh-deploy` from the project root will install dependencies, build the static assets, and update and push to the `gh-pages` branch
1. Visit https://adho.github.io/adho-status/ or https://status.adho.org/

## Adding or Changing Service Tests

The items to be displayed here are listed in [`src/config.js`](src/config.js)
