#!/bin/bash

BASE_DIR="$(dirname $( cd "$(dirname "$0")" ; pwd -P ))"

pushd ${BASE_DIR}/frontend
    yarn build
popd

pushd ${BASE_DIR}
   mvn package
popd