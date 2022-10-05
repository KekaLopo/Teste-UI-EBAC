const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '57oxh1',
  e2e: {
    baseUrl:'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
