#!/bin/bash

rm -rf ./dist

# run the unit tests first
# bash ./scripts/unit-tests.sh
grunt tests

# Create the validator dist minified files
NODE_ENV=production ./node_modules/.bin/webpack --config webpack.config.js

rm -rf ./dist/compiled