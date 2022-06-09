# Testing framework for Customer functionality

[![Cypress Tests](https://github.com/Liz-electro/testtask/actions/workflows/main.yml/badge.svg)](https://github.com/Liz-electro/testtask/actions/workflows/main.yml)

## Technologies used

- JavaScript
- [Cypress](https://www.cypress.io/)
- Mochawesome

### Description

Tests were written with Cypress.
Located:
```./cypress/```

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

/reports/...


