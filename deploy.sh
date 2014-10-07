#!/bin/sh

git checkout gh-pages
git pull origin gh-pages
git merge master
npm install
./node_modules/.bin/bower install
./node_modules/.bin/gulp
git add -A
git commit -m "update site"
git push origin gh-pages
git checkout master