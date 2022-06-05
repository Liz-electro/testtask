class loginPage {
    loginAs(userName, password) {
        cy.get("#1-email").type(userName);
        cy.get("input[name='password']").type(password);
        cy.get("button[name='submit']").click();
    }

}

export default loginPage