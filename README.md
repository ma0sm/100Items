# 100Items
Testing a page of 100 items

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
