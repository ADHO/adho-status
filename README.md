# ADHO Status Dashboard

A lightweight dashboard for displaying the status of ADHO-supported infrastructure.

## Run Locally
1. git clone this repository

### Live Updating Development Build
1. `yarn`
1. `yarn dev` (This will run the development server and reflect your changes to the page as you save files)
1. Visit `localhost:1234` in your browser

### Static Build
1. `yarn build` for a development build, `yarn build:production` for a production build (with sourcemaps)
1. Visit `dist/` using an http server

## Linting and Testing
* `yarn lint` to run eslint
* `yarn test` to run jest
* `yarn coverage` to run code coverage check

## Deploy to GH Pages
1. `./bin/deploy.sh` from the project root will install dependencies, build the static assets, and update and push to the `gh-pages` branch
1. Visit https://adho.github.io/adho-status/ or https://status.adho.org/

## Adding or Changing Service Tests
The items to be displayed here are listed in [`src/config.js`](src/config.js)
