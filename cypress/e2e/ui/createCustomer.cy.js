import customerPage from "../../pages/customerPage";
import navigationPanel from "../../pages/navigationPanel";
import {customersUrl} from "../../fixtures/SiteMap";

const customer = new customerPage();
const navigator = new navigationPanel();

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


    it('Customer with all the fields should be saved', () => {
        customer.fillTheForm(testdata.firstName, testdata.lastName, testdata.companyName, testdata.email,
            testdata.phone, testdata.comment);
        customer.wasSaved();
        cy.visit('https://factory.katanamrp.com/contacts/customers');
        cy.get('[data-testid="cellName"]').contains(testdata.firstName);
    });


    it('Customer with not filled Display name should not be created', () => {
        customer.fillDisplayName('');
        customer.hasNotFilledDisplayName();
        customer.wasNotSaved();
    });

    it('Email should be validated', () => {
        customer.fillEmail('test');
        customer.wasNotSaved();
    });

    it('Post request should be sent with all the customer details when first and last names were provided', () => {
        cy.intercept('POST', customersUrl).as('customer');
        customer.fillTheForm(testdata.firstName, testdata.lastName, testdata.companyName, testdata.email,
            testdata.phone, testdata.comment);

        cy.wait('@customer')
            .its('response')
            .then((response) => {
                expect(response).to.have.property('statusCode', 200)
            })
            .its('body')
            .then((body) => {
                expect(body.firstName).to.equal(testdata.firstName);
                expect(body.lastName).to.equal(testdata.lastName);
                expect(body.name).to.equal(testdata.firstName + ' ' + testdata.lastName);
            });
    });
});