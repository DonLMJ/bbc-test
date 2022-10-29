import * as auth from '../../po/auth'
import * as news from '../../po/news'
import * as helpers from '../../support/helpers'
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const user = helpers.defaultUser

//with a good list of users we can eventually add a variable for the user in the sentence below, it depends at wich level country is in our backend in relation to the comments feature I would say
Given('I signIn via UI', () => {
    cy.signOut()
    cy.signIn()
    auth.page.fillEmail(user.email)
    auth.page.fillPassword(user.password)
    auth.page.submit()
})


When('I visit News', () => {
    cy.interceptApiRoutes(['domestic'])
    //quick fix for cross-origin problem within Cypress
    cy.origin('https://www.bbc.co.uk', () => {
        cy.visit('/news')
    })
    cy.waitForApiResponse(['domestic'])
})

When('I open the first commentable news', () => {
    news.page.clickFirstCommentableNews()
})

Then('I can see input field for commenting', () => {
    //cy.get('.ssrcss-floim3-StylediFrame').its('0.contentDocument').its('body').then(cy.wrap).find('form.comments__input')
    news.page.findElementInIframeComments(news.commentInput)
})

Then('I can see signIn prompt', () => {
    //cy.get('.ssrcss-floim3-StylediFrame').its('0.contentDocument').its('body').then(cy.wrap).find('p.comments__signin--prompt')
    news.page.findElementInIframeComments(news.commentSignInPrompt)
})
