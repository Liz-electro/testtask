import CustomerPage from "../../pages/CustomerPage";
import NavigationPanel from "../../pages/NavigationPanel";
import CustomersPage from "../../pages/CustomersPage";

const customer = new CustomerPage();
const customers = new CustomersPage()
const navigator = new NavigationPanel();
const faker = require('faker')

describe('Test delete a customer functionality', () => {

    before(() => {
        cy.loginViaUI();
    });

    it('User should have a possibility to delete a customer from Customers page using Bulk', () => {


    });

    it('User should have a possibility to delete a customer from Customer page', () => {
        let randomCustomerName = faker.random.first_name();

        navigator.addNewCustomer();
        customer.fillDisplayName(randomCustomerName);
        customer.delete();
        customers.doesNotContainCustomerName(randomCustomerName);
    });


})