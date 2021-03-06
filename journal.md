# Journal

## Week 1

### Monday: August 31, 2020 (4 hours)

- Installed [BackstopJS](https://github.com/garris/BackstopJS) node module, initiated Backstop environment, and tested Backstop on [my site](https://zhumingcheng697.github.io/Portfolio-Site/) and the [NYU home page](https://www.nyu.edu/) using the provided `backstop.json`

- Tested with `readySelector`, `delay`, `hoverSelector`, `clickSelector`, `postInteractionWait`, and other properties

- Found out that certain `hoverSelector` and `clickSelector` did not work on the NYU home page and threw errors for some reason

- Found out about the timeout thresholds of Backstop

### Tuesday: September 1, 2020 (6 hours)

- Realized that the `hoverSelector` does not seem to work on HTML elements in `<header>` or `<footer>`

- Realized that the `clickSelector` does not seem to work on HTML elements not visible in the viewport

- Installed [yaml](https://www.npmjs.com/package/yaml) node module and converted config file in `.yml` format into JavaScript object literal format that Backstop accepts

- Ran Backstop tests in a (node) `.js` file

- Started testing with listening keyboard input from the console when running (node) `.js` files in the console

### Wednesday: September 2, 2020 (6 hours)

- Added the functionality to print instructions and warnings in various colors in the console, listen to keyboard input, and run accordingly

- Enabled the program to run smarter and prevent errors by checking existence of necessary files:

    > If the program is instructed to run `backstop approve`, but the necessary test files do not exist, `backstop test` will be automatically run **instead**, and the user will have to manually run `backstop approve` later on their own
    >
    > If the program is instructed to run `backstop test`, but the necessary reference files do not exist, `backstop reference` will be automatically run **first**, and the test will only be run if `backstop reference` succeeds

- Created two modes for better control and automation of the testing process—auto mode and manual mode:

    > In auto mode, all scenarios parsed from the `.yml` file will be tested one at a time:
    >
    >   - If `backstop reference` failed for the previous scenario, the process stops and automatically fallbacks to manual mode, as a failed `backstop reference` likely indicates networking issues
    >
    >   - The user is able to pause (and since September 3, resume) the automatic testing process
    >
    >   - Once all the scenarios have been tested, the program will be automatically switched to manual mode
    >
    > In manual mode, the user first chooses a scenario based on its index or name, and then chooses whether to run `backstop reference`, `backstop test`, or `backstop approve` for that scenario
    >
    > The user will be able to switch from manual mode to auto mode in the future (added on September 3)

### Thursday: September 3, 2020 (3 hours) 

- Added the functionality to resume auto runs when the user pauses it by typing anything during the run

- Added the functionality to start auto run from a specific scenario (using the same logic of choosing scenario by index or by name in manual mode) by typing `auto run` into the console

- Added documentation to most functions and important code blocks

- Fixed multiple bugs related to scenario-choosing and state-tracking

### Friday: September 4, 2020 (1 hour)

- Added the functionality to choose the `.yml` file to load the scenarios from (assuming the `.yml` file is in the same format as `nyu.yml`)

- Greatly improved the safety of loading config files

- Added the functionality to show a list of all the scenario names by typing `show list` into the console

- Improved the readability of console logs

## Week 2

### Tuesday: September 8, 2020 (3 hours)

- Added the functionality to start approving all scenarios from a specific scenario (using the same logic of choosing scenario by index or by name in manual mode) by typing `approve all` into the console

    > Under the special case of running `approve all`, contrary to earlier claims, the `backstop approve` command will always be run even if no necessary reference and/or test files exist and `backstop reference` or `backstop test`is run first

- Added the functionality to resume auto approvals when the user pauses it by typing anything during the run

- Fixed several bugs that only arise under special cases like single-scenario files or when auto run is paused when running at the last scenario

### Wednesday: September 9, 2020 (2 hours)

- Added `README.md`

- Added `package.json`

- Added support for scenarios with no reference urls

- Reorganized file structure

## Week 5

### Wednesday: September 30, 2020 (6 hours)

- Researched on the possibility of running BackstopJS in a Firefox environment

- Experimented with the Firefox version of Puppeteer

- Added ability to check which version of Puppeteer is installed (Chrome, Firefox, or other unknown)

- Experimented with exporting and importing custom variables and functions

### Thursday: October 1, 2020 (5 hours)

- Experimented with the [`child_process`](https://nodejs.org/api/child_process.html) module and its `exec` method

- Added support for switching Puppeteer versions (between Chromium and Firefox)

- Added ability to store Backstop files for different Puppeteer versions and different browsers under different directories

- Added support for running `backstopjs-test.js` via `npm start` and `switch-browser.js` via `npm run switch`

- Updated `package.json` and `package-lock.json`

- Updated `README.md`

## Week 6

### Monday: October 5, 2020 (1 hour)

- Added ability to ask which version to install when an unknown version of Puppeteer is found or no Puppeteer is found

- Updated `README.md`

- Merged `firefox-test` into `master` branch

- Renamed `switch-browser.js` to `switch-environment.js`

- Created `v1.0.0` and `v1.0.1` releases

### Thursday: October 8, 2020 (2 hours)

- Replaced `exec` with more efficient and flexible `spawn`

- Added ability to use environment variable to determine `debugMode` when running `switch-environment.js`.

- Updated `README.md`

## Week 7

### Monday: October 12, 2020 (1 hour)

- Prevented interrupted console logs from contaminating the rest of the console output

- Improved safety when parsing screen sizes

- Uniformed console log format

- Updated `README.md`

## Week 11

### Monday: November 9, 2020 (0 hours)

- Updated `package.json`

## Week 12

### Tuesday: November 17, 2020 (3 hours)

- Migrated from [`BackstopJS`](https://github.com/garris/BackstopJS) to [`Backstop-Playwright`](https://github.com/zhumingcheng697/Backstop-Playwright)

- Removed the use of `helper.js`

- Updated `README.md`

- Rerun all tests

## Week 13

### Monday: November 23, 2020 (2 hours)

- Updated `nyu.yml`

- Added support for default screen sizes
