class navigationPanel {
    addNewCustomer(){
        cy.get("#globalAdd").click();
        cy.get("#add-customer").click();
    }

}

export default navigationPanel