#!/bin/bash

# set ORIGIN to current git origin
ORIGIN=$(git remote -v | awk '$1=="origin" && $3=="(push)" {print $2}');
VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[",]//g');


# DIR=`pwd`
# target folder: /dist/site, make it clean and step into
rm -fr dist
npm run build:lib
npm run build
# mkdir dist dist/site
cd dist

# init an empty git repo, checkout branch gh-pages
git init 
git remote add origin $ORIGIN 
git checkout -b gh-pages 
git add . -A 
git commit -m "$VERSION" 
git push -f origin gh-pages 

# git reset --hard FETCH_HEAD
# remove all existed files in the repo, run the site build script
# 
cd ../
rm -rf dist

echo "commit and push to gh-pages"