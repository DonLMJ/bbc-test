const { Given} = require("@badeball/cypress-cucumber-preprocessor");

Given('I signIn via UI', () => {
    cy.visit('https://account.bbc.com/signin')
})

Given('I visit BBC news', () => {
    cy.visit('https://www.bbc.co.uk/news')
})
