import customerPage from "../../pages/customerPage";
import navigationPanel from "../../pages/navigationPanel";

const customer = new customerPage();
const navigator = new navigationPanel();

describe('Test add new customer functionality', () => {
    before(() => {
        cy.loginViaUI();
    });

    beforeEach(() => {
        navigator.addNewCustomer();
    });


    it('Customer with all the fields should be created', () => {
        customer.fillName('test');

    });

    it('Customer with just a name should be created', () => {
        customer.fillName('test');
    });

    it('Customer with not filled Display name should not be created', () => {
        customer.fillEmptyName();
    });

    it('Email should be validated', () => {
        customer.fillName('test');
    });
})