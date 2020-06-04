#!/bin/sh

# install dependencies
yarn &&

# build production assets
yarn build:production &&

# grab the commit hash for the revision we've built
COMMIT=$(git describe --always) &&

# checkout the gh-pages branch
git checkout gh-pages &&

# pull the latest updates
git pull origin gh-pages --rebase &&

# move built site to repo root
mv dist/* . &&

# replace tokens in index.html
sed -i'' "s/%%COMMIT-HASH%%/$COMMIT/" index.html &&
sed -i'' "s/%%BUILD-DATE%%/$(date +%F)/" index.html &&

# stage changes
git add . &&

# commit
git commit -m "Update sites from $COMMIT" &&

# push to github
git push origin gh-pages &&

# return to main
git checkout main;
