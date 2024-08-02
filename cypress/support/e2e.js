// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-fill-command';
import 'cypress-real-events';
import 'cypress-wait-until';

beforeEach(() => {
  // Ignore uncaught exceptions
  Cypress.on('uncaught:exception', (error, runnable) => {
    return false;
  });

  // Visit the salary insights page, ignoring any non-2xx status codes
  cy.visit('/salary-insights', { failOnStatusCode: false });

  // Intercept necessary API calls and wait for them to complete
  cy.intercept('GET', 'https://api-prod.letsdeel.com/salary_insights/data').as('datacall');
  cy.intercept('POST', 'https://api.eu.amplitude.com/2/httpapi').as('amplitudeCall');

  cy.wait('@datacall');
  cy.wait('@amplitudeCall');
});