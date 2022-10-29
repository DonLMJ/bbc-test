import * as auth from '../../po/auth'
import * as news from '../../po/news'
import * as helpers from '../../support/helpers'

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const user = helpers.defaultUser

//with a good list of users we can eventually add a variable for the user in the sentence below, it depends at wich level country is in our backend in relation to the comments feature I would say
Given('I signIn via UI', () => {
    //just for test repeatability
    cy.visitSignOut()
    cy.visitSignIn()
    //here I would have liked to have a signIn through the BE becuase it would be a better state preparation and becuase testing auth is not in scope
    auth.page.fillEmail(user.email)
    auth.page.fillPassword(user.password)
    auth.page.submit()
})

//here it would be nice to add a variable so we can use the same sentence to visit different part of the app
When('I visit News', () => {
    cy.interceptApiRoutes(['domestic'])
    //quick fix for cross-origin problem within Cypress
    cy.origin('https://www.bbc.co.uk', () => {
        cy.visit('/news')
    })
    cy.waitForApiResponse(['domestic'])
})

When('I open the first commentable news', () => {
    //I chose this approach beacuse this is the most direct path to land on the iFrame of comments
    //I expect another automation for testing opening news in the usual way
    news.page.clickFirstCommentableNews()
})

Then('I can see input field for commenting', () => {
    //cy.get('.ssrcss-floim3-StylediFrame').its('0.contentDocument').its('body').then(cy.wrap).find('form.comments__input')
    //this is just a proposal but it depends on our team policy on how have unit tests as well
    news.page.findElementInIframeComments(news.commentInput)
})

Then('I can see signIn prompt', () => {
    //cy.get('.ssrcss-floim3-StylediFrame').its('0.contentDocument').its('body').then(cy.wrap).find('p.comments__signin--prompt')
    //very aware that asserting on strings may take effort to maintain it in time, this is just a quick pick for the assertion
    news.page.findElementInIframeComments(news.commentSignInPrompt)
})
