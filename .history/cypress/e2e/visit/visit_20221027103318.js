const { Given} = require("@badeball/cypress-cucumber-preprocessor");

Given('I signIn via UI', () => {
    cy.visit('https://account.bbc.com/signin')
    cy.get('#user-identifier-input').type('lamaj.aldo@gmail.com')

})

Given('I visit BBC news', () => {
    cy.visit('https://www.bbc.co.uk/news')
})
