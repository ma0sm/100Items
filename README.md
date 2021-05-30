# 100Items
[This test app](https://immense-savannah-13991.herokuapp.com/) is a simple web application that shows you a grid of items, where you can select any one you want, and those will remain selected even if you refresh the browser. It loads 100 items at a time, and if you scroll to the end of the page it will load 100 items more. This code tests that using Codeceptjs.

### How to execute
All Codeceptjs tests can be found in the github_repository directory. For local execution, copy tests to root of the repository and launch codeceptjs:
```sh
$ npx codeceptjs run -o '{"tests": "relative path to test"}' 
```

### Reports & Screenshots
All screenshots on failure are copied to the /output/ directory.
Allure reports can be executed by installing [Allure](https://docs.qameta.io/allure/#_installing_a_commandline) and using the xml file generated in the /output/ directory.
```sh
allure serve /home/path/to/project/target/surefire-reports/
```
