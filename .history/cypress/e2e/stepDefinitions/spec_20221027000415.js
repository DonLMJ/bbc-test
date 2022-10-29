import { Then } from "cypress-cucumber-preprocessor/steps";

Given(`I visit BBC news`, (title) => {
  cy.title().should('include', title)
})