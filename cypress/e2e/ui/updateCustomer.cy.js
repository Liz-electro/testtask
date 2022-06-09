import CustomerPage from "../../pages/CustomerPage";
import NavigationPanel from "../../pages/NavigationPanel";
import {customersAPIUrl} from "../../fixtures/SiteMap";

const customer = new CustomerPage();
const navigator = new NavigationPanel();

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
        cy.intercept('PATCH', customersAPIUrl + '/*').as('customerUpdate');
        customer.fillDisplayName(testdata.firstName);

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