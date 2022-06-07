import customerPage from "../../pages/customerPage";
import navigationPanel from "../../pages/navigationPanel";

const customer = new customerPage();
const navigator = new navigationPanel();

describe('Test delete a customer functionality', () => {

    before(() => {
        cy.visit('/login');
        cy.loginViaUI();
    });

    it('User should have a possibility to delete a customer from Customers page', () => {


    })

    it('User should have a possibility to delete a customer from Customer page', () => {

    })


})