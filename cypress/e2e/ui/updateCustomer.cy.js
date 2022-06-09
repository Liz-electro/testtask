import customerPage from "../../pages/customerPage";
import navigationPanel from "../../pages/navigationPanel";
import {customersAPIUrl} from "../../fixtures/SiteMap";

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

    it('Patch request should be sent on customer info update', () => {
        cy.intercept('POST', customersAPIUrl).as('customerId');
        customer.fillDisplayName(testdata.firstName);
        cy.wait('@customerId')
            .its('response')
            .its('body')
            .then((body) => {
                cy.intercept('PATCH', customersAPIUrl + body.id).as('customerUpdate');
            });

        customer.fillTheForm(testdata.firstName, testdata.lastName, testdata.companyName, testdata.email,
            testdata.phone, testdata.comment);

        cy.wait('@customerUpdate')
            .its('response')
            .then((response) => {
                expect(response).to.have.property('statusCode', 200)
            })
            .its('body')
            .then((body) => {
                expect(body.firstName).to.equal(testdata.firstName);
                expect(body.lastName).to.equal(testdata.lastName);
            });
    });
});