#!/bin/bash

echo "Cleaning up..."
select yn in "Yes" "No"; do
  case $yn in
    Yes ) rm -rf ./artifacts/* && rm -rf ./contracts/* && rm -rf ./test/* && rm -rf ./scripts/deploy.ts && rm -rf ./scripts/upgrade.ts && rm -rf ./scripts/verify.ts && rm -rf ./nyc_output/* && rm -rf ./coverage/* && rm -rf ./deployments/* && rm -rf ./cache/* && rm -rf ./open-zeppelin/* && rm -rf ./typechain/* && exit;;
    No ) exit;;
  esac
done
