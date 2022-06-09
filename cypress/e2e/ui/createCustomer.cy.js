import CustomerPage from "../../pages/CustomerPage";
import NavigationPanel from "../../pages/NavigationPanel";
import CustomersPage from "../../pages/CustomersPage";
import {customersAPIUrl} from "../../fixtures/SiteMap";

const customer = new CustomerPage();
const navigator = new NavigationPanel();
const customers = new CustomersPage();

describe('Test add new customer functionality', () => {
    let testdata;

    before(() => {
        cy.loginViaUI();
        cy.fixture('testdata').then((fData) => {
            testdata = fData;
        });
    });

    beforeEach(() => {
        navigator.addNewCustomer();
    });


    it('Customer with all the fields should be saved and displayed on the Customers page', () => {
        customer.fillTheForm(testdata.firstName, testdata.lastName, testdata.companyName, testdata.email,
            testdata.phone, testdata.comment);
        customer.wasSaved();
        customers.open();
        customers.containsCustomerName(testdata.firstName);
    });


    it('Customer with not filled Display name should not be saved', () => {
        customer.fillDisplayName('');
        customer.hasNotFilledDisplayName();
        customer.wasNotSaved();
    });

    it('Email should be validated', () => {
        customer.fillTheForm(testdata.firstName, testdata.lastName, testdata.companyName, 'test',
            testdata.phone, testdata.comment);
        customer.hasIncorrectEmail();
        customer.wasNotSaved();
    });

    it('Post request should be sent with all the customer details when first and last names were provided', () => {
        cy.intercept('POST', customersAPIUrl).as('customer');
        customer.fillTheForm(testdata.firstName, '', '', '', '', '');

        cy.wait('@customer')
            .its('response')
            .then((response) => {
                expect(response).to.have.property('statusCode', 200)
            })
            .its('body')
            .then((body) => {
                expect(body.firstName).to.equal(testdata.firstName);
                expect(body.name).to.equal(testdata.firstName);
            });
    });

    it('Saved customer page url should include customerId', () => {
        cy.intercept('POST', customersAPIUrl).as('customer');
        customer.fillTheForm(testdata.firstName, '', '', '', '', '');

        cy.wait('@customer')
            .its('response')
            .its('body')
            .then((body) => {
                cy.location("pathname").should("equal", '/customer/' + body.id);
            });
    });
});