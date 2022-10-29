const { Given} = require("@badeball/cypress-cucumber-preprocessor");

Given('I signIn via UI', () => {
    cy.visit('https://account.bbc.com/signout')
    cy.visit('https://account.bbc.com/signin')
    cy.get('#user-identifier-input').type('lamaj.aldo@gmail.com')
    cy.get('#password-input').type('Donald1995')
    cy.get('#submit-button').click()

})

Given('I visit BBC news', () => {
    cy.visit('https://www.bbc.co.uk/news')
})
