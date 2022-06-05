
import loginPage from "../../pages/loginPage";

const login = new loginPage();

describe('test', () => {

    beforeEach(() => {
        cy.visit('/login');
    });

    it('User should have a possibility to login with correct credentials', () => {
        const username = Cypress.env('username')
        const password = Cypress.env('password')
        login.loginAs(username, password);
    })

    it('User should get an exeption in case of not valid password', () => {
        const username = Cypress.env('username')
        const password = Cypress.env('incorrectPassword')
        login.loginAs(username, password);
    })
})