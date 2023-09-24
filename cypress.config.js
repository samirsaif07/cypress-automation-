const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    "watchForFileChanges": false,
    "pageLoadTimeout": 100000,
    "defaultCommandTimeout": 100000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', { downloadFile })
    },
  },
});
