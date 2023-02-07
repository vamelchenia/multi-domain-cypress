const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  experimentalModifyObstructiveThirdPartyCode: true,
  experimentalSessionAndOrigin: true,
  e2e: {
    baseUrl: 'https://www.blender.org/',
    specPattern: 'cypress/e2e/**',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      on('task', { downloadFile });
    },
  },
});
