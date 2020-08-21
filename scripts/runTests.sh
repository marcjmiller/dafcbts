#!/bin/bash

set -e

function main {
  setup

  case "${1}" in
    anj|acceptanceNoJarBuild)
      acceptanceTests ${@}
    ;;

    acc|acceptance)
      yarnBuild
      jarBuild
      acceptanceTests ${@}
    ;;

    unit)
      unitTests
    ;;

    *)
      yarnBuild
      unitTests
      jarBuild
      acceptanceTests
    ;;
  esac
}

# Testing Functions
function unitTests {
    showBanner "Unit Tests"

    showBanner "Backend"
    pushd ${BASE_DIR}
        mvn -q -Dspring.profiles.active=test test #| grep -E "\[ERROR\]" # This commented section filters the output
    popd

    showBanner "Frontend"
    pushd ${BASE_DIR}/frontend
        CI=true yarn test --silent
    popd
}

function acceptanceTests {
  showBanner "Acceptance Tests"

  SPECIFIC_TESTS=""

  if [[ "${2}" != "" && $(find ${BASE_DIR}/acceptance/__test__/*${2}*) ]]; then
    # if [[ $(find ${BASE_DIR}/acceptance/__test__/*${2}*) ]]; then
      SPECIFIC_TESTS=$(find ${BASE_DIR}/acceptance/__test__/*${2}*)
    # fi
  fi

  java -jar -Dspring.profiles.active=test ${BASE_DIR}/target/dafcbts-[0-9\.]*-SNAPSHOT.jar --server.port=8585 &> ${BASE_DIR}/tmp/acceptance.log &
  echo $! > ${BASE_DIR}/tmp/dafcbts.pid

  testConnection ${REACT_APP_HOST} $(cat ${BASE_DIR}/tmp/dafcbts.pid)

  pushd ${BASE_DIR}/acceptance
    yarn
    if [[ "${CI}" && "$(lsb_release -crid | grep -i 'Ubuntu')" ]]; then
      # xvfb-run yarn codeceptjs run -o "{\"helpers\": {\"Puppeteer\": {\"url\": \"${REACT_APP_HOST}\", \"chrome\": {\"args\": [\"--headless\", \"--no-sandbox\"]}}}}" ${SPECIFIC_TESTS}
      xvfb-run yarn codeceptjs run
    
    else
      # yarn codeceptjs run -o "{ \"helpers\": {\"Puppeteer\": {\"url\": \"${REACT_APP_HOST}\"}}}" ${SPECIFIC_TESTS}
      yarn codeceptjs run
    fi

    if [[ "${?}" == "1" ]]; then
      echo "Acceptance Tests Failed... Exiting"
      exit 1
    fi
  popd
}

# Build Functions
function yarnBuild {
  pushd ${BASE_DIR}/frontend
    yarn
    yarn build
  popd
}

function jarBuild {
  showBanner "Build JAR"
  pushd ${BASE_DIR}
    mvn -q -Dmaven.test.skip=true -DskipTests clean package
  popd
}

# Utility Functions
function setup {
  showBanner "Setup"

  BASE_DIR="$(dirname $( cd "$(dirname "$0")" ; pwd -P ))"
  REACT_APP_HOST=http://localhost:8585

  mkdir -p ${BASE_DIR}/tmp
}

function showBanner {
  echo "======================================================"
  echo "  ${1} ($(date))"
  echo "======================================================"
}

function testConnection {
  COUNTER=0
  echo "Attempting to connect to ${1} (PID: ${2})..."
  until curl --insecure $1 &>/dev/null; do
    sleep 1
    let COUNTER+=1

    if [[ "$COUNTER" -gt 40 ]]; then
      echo "Could not connect to ${1} (PID: ${2}) after 40 seconds. Exiting..."
      exit 1
    fi

    if [[ $(( $COUNTER % 5 )) -eq 0 ]]; then
      echo "Attempting to connect to the app server..."
    fi
  done
}

function cleanUp {
  showBanner "CleanUp"
  if [[ -f ${BASE_DIR}/tmp/dafcbts.pid ]]; then
    cat ${BASE_DIR}/tmp/dafcbts.pid | xargs kill -9
    rm ${BASE_DIR}/tmp/dafcbts.pid
  fi
}

trap cleanUp EXIT

main ${@}