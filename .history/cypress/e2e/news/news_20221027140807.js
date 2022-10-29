import * as auth from '../../po/auth'
import * as helpers from '../../support/helpers'
const { Given} = require("@badeball/cypress-cucumber-preprocessor");

Given('I signIn via UI', () => {
    cy.signOut()
    cy.signIn()
    auth.page.fillEmail(helpers.defaultUser.email)
    auth.page.fillPassword(helpers.defaultUser.password)
    auth.page.submit()
})

When('I visit BBC news', () => {
    cy.visit('https://www.bbc.co.uk/news')
})
