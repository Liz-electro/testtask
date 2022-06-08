class customersPage {

    openCustomerPage(customerId) {
        cy.get('[row-id]=' + customerId).click();
    }
}

export default customersPage