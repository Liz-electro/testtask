
import customersPage from "../../pages/customersPage";

const customers = new customersPage();
import {customersUrl} from "../../fixtures/SiteMap";

describe('Test delete a customer functionality', () => {

    before(() => {
        cy.visit('/login');
        cy.loginViaUI();
        cy.visit(customersUrl);
    });

    it('User should have a possibility to delete a customer from Customers page using Bulk', () => {
        let customerId;
        cy.addCustomer().then(({body}) => {
            customerId = body.id;
        });
        customers.openCustomerPage(customerId);


    });

    it('User should have a possibility to delete a customer from Customer page', () => {


    });


})