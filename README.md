## What is Cypress?
See the comprehensive [Cypress docs](https://docs.cypress.io/guides/overview/why-cypress.html#).

## Setup and installing
### Prerequisites
- Ensure Node is installed on your machine. See Node.js is 12 or 14 and above.
    
### Install
Now install dependencies using yarn:

    npm install

### Run
Cypress UI

    npm run cypress:open 

### Run
Cypress CLI to run only regression tests

    npx cypress run --env tags="@regression" 

Two automatic tests can be found in news.feature, the ability to comment articles in the most direct flows as users with different permissions is crucial in a regression suite where we need to make sure about user experience for commenting at the highest partitions found(loggged in vs NOT logged in user).

A set of manual tests have been propesed in newsManual.feature keeping in mind all functionalities usually covered at the component level.






