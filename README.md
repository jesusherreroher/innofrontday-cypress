# Innofrontday-E2E-Testing-with-Cypress

<p align="center" width="100%">
    <img width="33%" src="./cypress/docs/img/innofronday.png">
</p>

---
- E2E tests:
  - [Methodology](./cypress/docs/pages/e2e-testing.md)
  - [Cypress configuration](./cypress/docs/pages/cypress-config.md)
  - [Git Hub configuration](./cypress/docs/pages/gha-config.md)

- Innofronday E2E Testing with Cypress
  - [Project setup](#project-setup)
    - [Run your end-to-end tests](#Run-your-end-to-end-tests)
    - [Run your end-to-end mode headless](#Run-your-end-to-end-mode-headless)
    - [InnoFronday Scripts](#Scripts)
    - [Learn more about automation with Cypress and GitHub Actions](#Learn-more-about-automation-with-Cypress-and-GitHub-Actions)

---

## Project setup

```shell
npm install
```

Install Cypress in the project

```shell
npm install cypress
```

After installing Cypress in the project, some new files will appear in the Cypress structure like node modules folder and can update some configuration file like package.json including some small change of Cypress version.

### Run your end-to-end tests
Launching with this command opens the cypress console where you can choose which test to run. After that, a browser is opened where the tests are executed

```shell
npm run cyo
```

### Run your end-to-end mode headless
Launching with this command will run the tests in background (console mode), seeing as a result the logs included in the tests

```shell
npm run cyr
```

### Scripts

The repository contains the following scripts:

✅ Script Article Dates
  - Get the dates of the articles and indicate if they are from the current month of before
  
✅ Check Response
  - Check network response

✅ Phone Number
  - Validate if phone number is same in contact and legal advice

✅ Required file
  - When trying to send a form without filling in the mandatory fields, it is verified that the notice appears indicating that there are      mandatory required fields


### Learn more about automation with Cypress and GitHub Actions

https://www.innocv.com/web/noticias/automatizacion-de-pruebas-funcionales-con-cypress-y-github-actions
