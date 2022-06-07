
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
        cy.location("pathname").should("equal", "/sales");
    })

    it('User should get an exception in case of not valid password', () => {
        const username = Cypress.env('username')
        const password = Cypress.env('incorrectPassword')
        login.loginAs(username, password);
    })

    it('User should have a possibility to logout', () => {
        const username = Cypress.env('username')
        const password = Cypress.env('password')
        login.loginAs(username, password);
        cy.get("[data-testid=\"userInfoContainer\"]").click();
        cy.get("#logout").click();
        cy.location("pathname").should("equal", "/");
    })
})