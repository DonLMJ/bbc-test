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

When('I visit BBC news', () => {
    cy.origin('https://www.bbc.co.uk', () => {
        cy.visit('/news')
    })
})

Then('I see stories with comments', () => {
    news.page.findFirstStoryWithComment()
    cy.wait(5000)
    cy.get('.ssrcss-floim3-StylediFrame').its('0.contentDocument').find('form.comments__input')
    //cy.get('div.comments__header.comments--border.comments--shadow')
    //cy.get('span.ssrcss-1if1g9v-MetadataText.ecn1o5v1').contains('Comments').click()
    //cy.get('html.id-svg.js-focus-visible')
})
