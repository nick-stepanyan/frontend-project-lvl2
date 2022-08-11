### Hexlet tests and linter status:
[![Actions Status](https://github.com/nick-stepanyan/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/nick-stepanyan/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/082f8dd87e9c505756d8/maintainability)](https://codeclimate.com/github/nick-stepanyan/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/082f8dd87e9c505756d8/test_coverage)](https://codeclimate.com/github/nick-stepanyan/frontend-project-lvl2/test_coverage)
[![run bug fix](https://github.com/nick-stepanyan/frontend-project-lvl2/actions/workflows/nodejs.yml/badge.svg)](https://github.com/nick-stepanyan/frontend-project-lvl2/actions/workflows/nodejs.yml)
# Difference calculator
Difference calculator is a program with command-line interface (CLI) that generates a difference between two data structures or configuration files. Performs the following operations: reading files, parsing incoming data, building a tree of differences, forming the necessary output. The algorithm is based on tree recursion.

### Main features:
* Supports different input formats: json, yaml.
* Generates a report in the form of plain text, stylish and json.


1. Tilt the repository:
```
  git clone git@github.com:nick-stepanyan/frontend-project-lvl2.git
```
2. Establish a dependency:
```
  make install
  make publish
```
For help run `gendiff -h` or `gendiff --help`:
```
$ gengiff --help
Usage: gendiff [options] <filepath1> <filepath2>
Compares two configuration files and shows a difference.
Options:
  -v, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           display help for command
```
Run:
```
gendiff [options] <path/to/file1> <path/to/file2>
```
## Work example.

## Running the compare 2 json files command.

[![asciicast](https://asciinema.org/a/gZpDVLtgUGOdvfF5VbRKnG0EV.svg)](https://asciinema.org/a/gZpDVLtgUGOdvfF5VbRKnG0EV)

## Comparison of flat files (yaml):

[![asciicast](https://asciinema.org/a/IN9ntO05zh6dKb5BZyWr9bVxg.svg)](https://asciinema.org/a/IN9ntO05zh6dKb5BZyWr9bVxg)

## Recursive comparison
The json and yaml formats have a recursive structure. In other words, a value on a certain key itself can be a json or a yaml.

[![asciicast](https://asciinema.org/a/GI4pCf85kcyxkqqkanyWqIyEc.svg)](https://asciinema.org/a/GI4pCf85kcyxkqqkanyWqIyEc)

## Flat Format

[![asciicast](https://asciinema.org/a/Cm1qhLfZ8Hf0Rim95t8UJwrZx.svg)](https://asciinema.org/a/Cm1qhLfZ8Hf0Rim95t8UJwrZx)

## Output to json

[![asciicast](https://asciinema.org/a/d5q0gy1PHkNSHd8J9HrcBBTo9.svg)](https://asciinema.org/a/d5q0gy1PHkNSHd8J9HrcBBTo9)
