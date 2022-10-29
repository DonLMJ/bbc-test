import { Then } from "cypress-cucumber-preprocessor/steps";

Given(`I visit BBC news`, () => {
    cy.visit('https://www.bbc.co.uk/news')
})