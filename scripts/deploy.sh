#!/bin/bash

# creates branch gh-pages if not exist, then checkout
git checkout -b gh-pages

# update branch
git merge main --no-edit

# add the dist directory(even if gitignored)
git add dist -f
git commit -m 'Deployment commit' 

# pushes only the dist directory
git subtree push --prefix dist origin gh-pages 

# switch back to main
git checkout main