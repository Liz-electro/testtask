Cypress.Commands.add('loginViaAPI', (
    email = Cypress.env('username'),
    password = Cypress.env('password')
) => {
    cy.session([], () => {
        cy.request({
            method: 'POST',
            url: `https://login.katanamrp.com/co/authenticate/`,
            body: {
                client_id: "fhZWp3TRAtS3U0X3QXk-Ct4Awxzc92P3",
                credential_type: "http://auth0.com/oauth/grant-type/password-realm",
                realm: "Username-Password-Authentication",
                username: email,
                password
            },
            headers: {
                origin: "https://katanamrp.com",
                referer: "https://katanamrp.com/"
            }
        }).then(({body}) => {
            window.localStorage.setItem('authToken', body.token);
        });
    });
});

Cypress.Commands.add('loginViaUI', (
    email = Cypress.env('username'),
    password = Cypress.env('password')
) => {
    cy.visit('/login');
    cy.get("#1-email").type(email);
    cy.get("input[name='password']").type(password);
    cy.get("button[name='submit']").click();
});

Cypress.Commands.add('addNewCustomer', () => {
    cy.visit('https://factory.katanamrp.com/sales');
    cy.get('#globalAdd').click();
    cy.get('#add-customer').click();
});

Cypress.Commands.add('addNewCustomerViaRequest', () => {
    return cy.request({
        url: 'https://customers.katanamrp.com/api/customers',
        method: 'POST',
        headers: {
            'content-type': "application/json",
            Authorization: "Bearer ${Cypress.env('token')}",
            origin: 'https://katanamrp.com',
            referer: "https://katanamrp.com/"
        },
        body: {"addresses": [], "name": "test"},
    });
});

Cypress.Commands.add('deleteCustomers', () => {
    return cy.request({
        url: 'https://customers.katanamrp.com/api/customers',
        method: 'POST',
        headers: {
            'content-type': "application/json",
            Authorization: "Bearer ${Cypress.env('token')}",
            origin: 'https://katanamrp.com',
            referer: "https://katanamrp.com/"
        },
        body: {"addresses": [], "name": "test"},
    });
});
