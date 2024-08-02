const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  viewportHeight: 900,
  viewportWidth: 1400,
  watchForFileChanges: false,
  defaultCommandTimeout: 30000,
  videosFolder: 'reports/e2e/videos',
  videoUploadOnPasses: false,
  screenshotsFolder: 'reports/e2e/screenshots',
  chromeWebSecurity: false,
  video: false,
  scrollBehavior: false,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {

      on('file:preprocessor', cucumber())
      return config
    },
    specPattern: 'cypress/e2e/**/*.{feature,features}',
    baseUrl: 'https://growth.deel.training/dev',
  },
})
