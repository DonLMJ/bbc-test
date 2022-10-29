export const emailElem = '#user-identifier-input'

class Page {
    fillEmail(email = helpers.getUniqueEmail('gb')) {
        cy.get(emailElem)
          .clear()
          .type(email)
          .should('have.value', email)
    }
}