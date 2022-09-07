#!/bin/bash

echo "Cleaning up..."
select yn in "Yes" "No"; do
  case $yn in
    Yes ) rm -rf ./artifacts/* && rm -rf ./contracts/* && rm -rf ./nyc_output/* && rm -rf ./coverage/* && rm -rf ./deployments/* && rm -rf ./cache/* && rm -rf ./open-zeppelin/* && rm -rf ./typechain/* && exit;;
    No ) exit;;
  esac
done
