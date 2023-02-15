import { CY_TARGET } from '../cy_vars.js';
  
Cypress.Commands.add('visitWeb', (path) => {
  cy.visit(`${CY_TARGET}${path}`);
});

Cypress.Commands.add('closeCookies', () => {
  cy.get('#rcc-decline-button').click();
});
