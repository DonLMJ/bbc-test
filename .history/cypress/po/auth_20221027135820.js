export const emailElem = '#user-identifier-input'

class Page {
    fillEmail(email) {
        cy.get(emailElem)
          .clear()
          .type(email)
          .should('have.value', email)
    }

    fillPassword(password) {
        cy.get(passwordElem)
          .clear()
          .type(password)
          .should('have.value', password)
    }
}

export const page = new Page()