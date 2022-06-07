class customerPage {
    fillName(customerName){
        cy.get("#displayNamePicker").type(customerName+'{enter}');
    }

    fillEmptyName(){
        cy.get("#displayNamePicker").type('{enter}');
    }

    fillEmail(email){
        cy.get("data-testid=\"inputCustomerEmail\"").type(email+'{enter}');
    }

}

export default customerPage