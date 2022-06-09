import {customersUrl} from "../fixtures/SiteMap";

class customersPage {

    open(){
        cy.visit(customersUrl);
    }

    openCustomerPage(customerId) {
        cy.get('[row-id]=' + customerId).click();
    }

    containsCustomerName(customerName){
        cy.get('[data-testid="cellName"]').contains(customerName);
    }
}

export default customersPage