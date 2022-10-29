export const emailElem = '#user-identifier-input'

class Page {
    fillEmail(email) {
        cy.get(emailElem)
          .clear()
          .type(email)
          .should('have.value', email)
    }
}

export const page = new Page()