export const emailElem = '#user-identifier-input'
export const passwordElem = '#password-input'
export const submitButton = '#submit-button'

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
    submit() {
        cy.interceptApiRoutes(['promoCheck'])
        cy.get(submitButton)
          .click()
    }
}

export const page = new Page()