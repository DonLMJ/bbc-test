const { Given} = require("@badeball/cypress-cucumber-preprocessor");

Given('I signIn via UI', () => {
    cy.signOut()
    cy.signIn()
    cy.get('#user-identifier-input').type('lamaj.aldo@gmail.com')
    cy.get('#password-input').type('Donald1995')
    cy.get('#submit-button').click()
})

Given('I visit BBC news', () => {
    cy.visit('https://www.bbc.co.uk/news')
})
