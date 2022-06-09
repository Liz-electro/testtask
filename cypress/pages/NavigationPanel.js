class NavigationPanel {
    addNewCustomer(){
        cy.get("#globalAdd").click();
        cy.get("#add-customer").click();
    }

}

export default NavigationPanel