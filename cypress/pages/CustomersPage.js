import {customersUrl} from "../fixtures/SiteMap";

class customersPage {

    open(){
        cy.visit(customersUrl);
    }

    openCustomerPage(customerId) {
        cy.get('[row-id]=' + customerId).click();
    }

    containsCustomerName(customerName){
        cy.contains(customerName).should('exist');
    }

    doesNotContainCustomerName(customerName){
        cy.contains(customerName).should('not.exist');
    }
}

export default customersPage