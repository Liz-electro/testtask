import customerPage from "../../pages/customerPage";
import navigationPanel from "../../pages/navigationPanel";
import {customersUrl} from "../../fixtures/SiteMap";

const customer = new customerPage();
const navigator = new navigationPanel();

describe('Test delete a customer functionality', () => {
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

    it('Patch request should be sent with all the customer details after names were provided', () => {
        let customerId;
        customer.fillDisplayName(testdata.firstName);
        customerId = cy.location("pathname");
        cy.log(customerId);
        cy.intercept('PATCH', customersUrl + '/' + customerId).as('customer');
        customer.fillTheForm(testdata.firstName, testdata.lastName, testdata.companyName, testdata.email,
            testdata.phone, testdata.comment);

        cy.wait('@customer')
            .its('response')
            .then((response) => {
                expect(response).to.have.property('statusCode', 200)
            })
            .its('body')
            .then((body) => {
                expect(body.comment).to.equal(testdata.comment);
                expect(body.email).to.equal(testdata.email);
                expect(body.phone).to.equal(testdata.phone);
            });
    });
});