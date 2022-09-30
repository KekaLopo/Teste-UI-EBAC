const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '57oxh1',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
