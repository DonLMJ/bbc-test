export const emailElem = '#user-identifier-input'
export const passwordElem = '#password-input'
export const submitButton = '#submit-button'

class Page {
  //ideally speaking I would have created a signInApi as testing the auth is not in the scope of this testing flow
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
      //not responsability of e2e to do so but interceptions in points like this make the test more robust
      //furthermore, this gives better traceability with testing suites for BE for instance in a test env
        cy.interceptApiRoutes(['userInfo'])
        cy.get(submitButton)
          .click()
        cy.waitForApiResponse(['userInfo'])
    }
}

export const page = new Page()