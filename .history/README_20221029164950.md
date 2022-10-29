Setup and installing

Prerequisites
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

Some manual test have been propesed keeping in mind that other scenarios should not be needed with good coverage in unite testing.    






