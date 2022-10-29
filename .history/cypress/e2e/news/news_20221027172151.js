import * as auth from '../../po/auth'
import * as news from '../../po/news'
import * as helpers from '../../support/helpers'
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('I signIn via UI', () => {
    cy.signOut()
    cy.signIn()
    auth.page.fillEmail(helpers.defaultUser.email)
    auth.page.fillPassword(helpers.defaultUser.password)
    auth.page.submit()
})

When('I visit News', () => {
    cy.origin('https://www.bbc.co.uk', () => {
        cy.visit('/news')
    })
})

When('I open the first commentable news', () => {
    news.page.clickFirstCommentableNews()
})

Then('I can see input field for commenting', () => {
    cy.get('.ssrcss-floim3-StylediFrame').its('0.contentDocument').its('body').then(cy.wrap).find('form.comments__input')
})

Then('I can see signIn prompt', () => {
    cy.get('.ssrcss-floim3-StylediFrame').its('0.contentDocument').its('body').then(cy.wrap).find('p.comments__signin--prompt')
})
