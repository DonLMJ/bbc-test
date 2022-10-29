export const emailElem = '#user-identifier-input'
export const passwordElem = '#password-input'
export const submitButton = '#submit-button'

class Page {
  //ideally speaking I would have created a signInViaBE as testing the auth is not in the scope of this test
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
      //not responsability of e2e to do so but interceptions in points like this make the test bullet proff
      //furthermore, this gives better traceability between testing suites in BE
        cy.interceptApiRoutes(['userInfo'])
        cy.get(submitButton)
          .click()
        cy.waitForApiResponse(['userInfo'])
    }
}

export const page = new Page()