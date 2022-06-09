# Testing framework for Customer functionality

[![Cypress Tests](https://github.com/Liz-electro/testtask/actions/workflows/main.yml/badge.svg)](https://github.com/Liz-electro/testtask/actions/workflows/main.yml)

## Technologies used

- JavaScript
- [Cypress](https://www.cypress.io/)
- Mochawesome

### Description
This is a testing framework for Katana application.
Partially covered Create customer, Update customer and Delete customer functionalities.

Environment variables should be specified to run the framework:
**username={$email},password={$password}.**

Another way is to add them to **cypress.config.js** file:
>env: {
username: '{$email}',
password: '{$password}'}


## How to run Cypress tests in cmd

```sh
npx cypress run --env "username={$email},password={$password}"   
```

## How to run Cypress tests in Browser

```sh
npx cypress run --env "username={$email},password={$password}"
```

## Reporting
```sh
npm run cy:report --env "username={$email},password={$password}"
```
```sh
/reports/...
```

