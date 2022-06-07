# Testing framework

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
./node_modules/.bin/cypress run --env "username={$email},password={$password}"   
```

## How to run Cypress tests in Browser

```sh
./node_modules/.bin/cypress open --env "username={$email},password={$password}"
```

## Reporting

/reports/...


