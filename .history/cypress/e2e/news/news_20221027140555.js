import * as auth from '../../po/auth'
import * as helpers from '../../support/helpers'
const { Given} = require("@badeball/cypress-cucumber-preprocessor");

Given('I signIn via UI', () => {
    cy.signOut()
    cy.signIn()
    auth.page.fillEmail('lamaj.aldo@gmail.com')
    auth.page.fillPassword('Donald1995')
    auth.page.submit()
})

Given('I visit BBC news', () => {
    cy.visit('https://www.bbc.co.uk/news')
})
