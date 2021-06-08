# 100Items
[This test app](https://immense-savannah-13991.herokuapp.com/) is a simple web application that shows you a grid of items, where you can select any one you want, and those will remain selected even if you refresh the browser. It loads 100 items at a time, and if you scroll to the end of the page it will load 100 items more. This code tests that using Codeceptjs.

### Setup
1. Install [NodeJS](https://nodejs.org/en/download/).
2. In the "challenge-ma0sm" directory, run the following command:
```sh
$ bash Setup.sh
```

### How to execute
In the "challenge-ma0sm" directory, run the following command:
```sh
$ bash RunTests.sh
```

A report will be generated with the Allure plugin once the tests are complete and opened in a browser. It is based on the file generated in the ./output directory.
All failed tests will create a screenshot which will be written to the output directory.
