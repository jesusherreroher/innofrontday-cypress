# Testing methodology
- [Intro](./e2e-testing.md)
- [Configure Cypress](./cypress-config.md)
- Configure GHA
# Github configurations:


## Test repo configuration

The following values should be set based on your application:
```
CYPRESS_BASE_URL
CYPRESS_SPEC_PATH
```

The code below will be added into the test repo's .github/workflows/e2e-test.yml.

Create a new Github action workflow:

[Example of workflow](../../../.github/workflows/e2e-test.yml)

Create a branch that will be used to initialise the workflow when needed. CCI will automatically start the testing workflow whenever a push is detected in that branch. 

Define the branch like:
```
on:
  push:
    branches:
      - main
      - develop

```

## Note

This workflow will not be instant. it will take anywhere between 3 and 30 minutes to run, depending on the number of tests and the complexity of the tests, and the application being tested.

The speed can be improved by further optimising the way the tests are run (parallelisation, conditional testing, feature specific testing etc.) but this is outside the scope of this guide.

Also you can create choices for dispatch manually the test.
Define like the example, select the environment and also you can create parameter to spec target etc
```
on:
  workflow_dispatch:
    inputs:
      environment:
        description: 'Select environment target'
        required: true
        default: 'warning'
        type: choice
        options:
        - dev
        - stg
      app:
        description: 'Select app target'
        required: true
        default: 'warning'
        type: choice
        options:
        - test1
        - test2
        - test3

```

You can define schedule to run the action, you can follow the e2e-test.yml
NOTE: The expecific time is UTC not in local time.
```
on:
  schedule:
    # At 16:00 (UTC) on Friday in every month from January through December. (see https://crontab.guru/#00_16_*_1-12_5)
    - cron: '00 16 * 1-12 5'

```