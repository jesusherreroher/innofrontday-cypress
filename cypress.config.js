const { defineConfig } = require("cypress");

module.exports = defineConfig({
  numTestsKeptInMemory: 5,
  viewportWidth: 1920,
  viewportHeight: 1200,
  chromeWebSecurity: false,
  reporter: "junit",

  reporterOptions: {
    mochaFile: "artifacts/results/test-output-[hash].xml",
    toConsole: false,
  },

  fixturesFolder: "tests/e2e/fixtures",
  screenshotsFolder: "artifacts/screenshots",
  videosFolder: "artifacts/videos",

  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
      
          return null
        },
      }),
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.preferences.default.intl = { accept_languages: "es" }
          return launchOptions
        }
      })
    },

    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"
  },
});
