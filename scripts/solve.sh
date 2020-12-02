#!/usr/bin/env bash

export $(cat .env | xargs)

DAY="${1}"
if [[ -z ${DAY} ]] ; then
  echo "Error: You must pass in a day of the month";
  exit 1;
fi
DAY_NO_ZEROS="$(echo $DAY | sed 's/^0*//')"
shift;
YEAR="${1}"
if [[ -z ${YEAR} ]] ; then
  YEAR="2020"
fi
shift;

FOLDER="${YEAR}-${DAY_NO_ZEROS}"
cd ${FOLDER}

echo "Solving Day: $DAY_NO_ZEROS Year: $YEAR"
RESULT=$(ts-node solve.ts --result)
echo "Result:"
echo $RESULT
