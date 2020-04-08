#!/bin/bash

BASE_DIR="$(dirname $( cd "$(dirname "$0")" ; pwd -P ))"

java -jar ${BASE_DIR}/target/dafcbts-[0-9\.]*-SNAPSHOT.jar --server.port=8585