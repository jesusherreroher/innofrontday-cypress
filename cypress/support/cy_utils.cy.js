import {
  GET_METHOD,
  CONTACT_URL,
  NEWS_URL
} from '../support/vars.cy';

//funtion to enter contact page
Cypress.Commands.add('enterContactPage', () => {
  cy.task('log', '    Enter to web...');
  cy.visitWeb('');
  cy.closeCookies();
  cy.task('log', '    Enter to contact page');
  cy.get('[href="/contacto"]').click();
  cy.interceptService(GET_METHOD,CONTACT_URL,'WaitingContactPage');
});

//funtion to enter news page
Cypress.Commands.add('enterNewsPage', () => {
  cy.task('log', '    Enter to news page...');
  cy.visit('https://www.innocv.com/noticias');
  cy.closeCookies();
  cy.interceptService(GET_METHOD,NEWS_URL,'WaitingNewsPage');
});

//function to intercept services
Cypress.Commands.add('interceptService', (METHOD,URL,NAME) => {
  cy.intercept({
    method: METHOD,
    url: URL,
  }).as(NAME);
  cy.wait('@'+NAME,{ timeout: 30000 });
});

//function to check a network response in news
Cypress.Commands.add('checkNewsResponse', (METHOD,URL,STATUS_CODE) => {
  cy.request(METHOD, URL).then((response) =>{
    expect(response.status).to.equal(STATUS_CODE);
  })
});









