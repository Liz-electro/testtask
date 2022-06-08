class customerPage {
    fillDisplayName(displayName) {
        cy.get('[data-testid="inputCustomerDisplayName"]').type(displayName + '{enter}');
    }


    fillEmail(email) {
        cy.get('[data-testid="inputCustomerEmail"]').type(email + '{enter}');
    }

    fillTheForm(customerFirstName, customerLastName, companyName, email, phone, comment) {
        cy.get('[data-testid="inputCustomerFirstName"]').type(customerFirstName + '{enter}');
        cy.get('[data-testid="inputCustomerLastName"]').type(customerLastName + '{enter}');
        cy.get('[data-testid="inputCustomerCompany"]').type(companyName + '{enter}');
        cy.get('[data-testid="inputCustomerEmail"]').type(email + '{enter}');
        cy.get('[data-testid="inputCustomerPhone"]').type(phone + '{enter}');
        cy.get('[data-testid="inputCustomerComment"]').type(comment + '{enter}');
    }

    wasNotSaved() {
        cy.get('.katana-label.notSaved').should('have.text', 'Not saved');
    }

    wasSaved() {
        cy.get('.katana-label').should('have.text', 'All changes saved');
    }

    hasNotFilledDisplayName(){
        cy.get('.MuiFormLabel-root.Mui-error')
            .should('have.css', 'color', 'rgb(228, 44, 0)');
    }

}

export default customerPage