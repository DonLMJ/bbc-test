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

Cypress.Commands.add('signOut', () => {
    cy.visit(`${Cypress.env('urls').accountBaseUrl}${Cypress.env('urls').signOut}`)
  })

Cypress.Commands.add('signIn', () => {
    cy.visit(`${Cypress.env('urls').accountBaseUrl}${Cypress.env('urls').signIn}`)
})

Cypress.Commands.add('waitForApiResponse', apis => {
    if (apis.length) {
      const apiAlias = apis.map(api => `@${api}`)
      apiAlias.forEach(api => {
        cy.wait(api).then(interception => {
          expect(interception.state).to.eq('Complete')
          expect([200, 201]).to.include(interception.response.statusCode)
        })
      })
    }
  })