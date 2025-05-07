// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('fillMandatoryFields', (first_name, last_name, email, comments) => {
    cy.get('input[id="firstName"]')
        .should('be.visible')
        .type(first_name)
    cy.get('input[id="lastName"]')
        .should('be.visible')
        .type(last_name)
    cy.get('input[id="email"]')
        .should('be.visible')
        .type(email)
    cy.get('textarea[id="open-text-area"]')
        .should('be.visible')
        .type(comments)
        .should('have.value', comments)
})

Cypress.Commands.add('fillPhoneNumber', (phone_number) => {
    cy.get('input[id="number"]')
        .should('be.visible')
        .type(phone_number)
})

Cypress.Commands.add('fillProduct', (product) => {
    cy.get('select[id="product"]')
        .should('be.visible')
        .select(product)
        .should('have.value', product.toLowerCase())
})

Cypress.Commands.add('fillSupportType', (support_type) => {
    cy.get('input[type="radio"][value="' + support_type + '"]')
        .should('be.visible')
        .check()
        .should('be.checked')
})

Cypress.Commands.add('fillPreferentialContact', (preferential_contact) => {
    cy.get('input[type="checkbox"]')
        .should('be.visible')
        .check(preferential_contact)
        .should('be.checked')
})

Cypress.Commands.add('submitForm', () => {
    cy.contains('.button', 'Enviar').click()
})

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (first_name, last_name, email, comments) => {
    cy.fillMandatoryFields(first_name, last_name, email, comments)
    cy.submitForm()
})

Cypress.Commands.add('verifySucessMessage', () => {
    cy.get('.success')
        .should('be.visible')
        .and('contain.text', 'Mensagem enviada com sucesso.')
})

Cypress.Commands.add('verifyErrorMessage', () => {
    cy.get('.error')
        .should('be.visible')
        .and('contain.text', 'Valide os campos obrigatórios!')
})