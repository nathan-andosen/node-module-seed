#!/bin/bash

nyc --exclude-after-remap false --check-coverage node ./scripts/unit-tests.js

node ./scripts/update-readme-with-shield-badge.js