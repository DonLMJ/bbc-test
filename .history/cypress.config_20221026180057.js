const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./src/plugins')(on, config)
    },
    testFiles: '**/*.feature'  
  },
});
