import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given(`I visit BBC news`, () => {
    cy.visit('https://www.bbc.co.uk/news')
})

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I visit BBC news', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})
