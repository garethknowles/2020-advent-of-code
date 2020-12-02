#!/usr/bin/env bash

export $(cat .env | xargs)

if [[ -z ${AOC_SESSION_COOKIE} ]] ; then
  echo "Error: You must set a valid AOC_SESSION_COOKIE in the .env file - you can get this via browser Cookies after logging in to https://adventofcode.com";
  exit 1;
fi

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

echo "Day: $DAY_NO_ZEROS Year: $YEAR"

FOLDER="${YEAR}-${DAY_NO_ZEROS}"
mkdir -p "${FOLDER}"

cp template/* ${FOLDER}

cd ${FOLDER}

PUZZLE_URL="https://adventofcode.com/${YEAR}/day/${DAY_NO_ZEROS}/input"
PUZZLE_FILE="input.txt"
curl "${PUZZLE_URL}" -H "cookie: session=${AOC_SESSION_COOKIE}" -o "${PUZZLE_FILE}" 2>/dev/null
