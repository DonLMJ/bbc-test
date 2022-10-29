const { Given} = require("@badeball/cypress-cucumber-preprocessor");

Given('I visit BBC news', () => {
    cy.visit('https://www.bbc.co.uk/news')
})
