import { CY_TIMEOUT } from '../cy_vars.js';


export default () => {
  describe('1️⃣ Article dates', () => {
    Cypress.config('defaultCommandTimeout', CY_TIMEOUT);

    beforeEach(() => {
      cy.enterContactPage();
    });

    it('Checks news article dates', () => {
      const regex = /^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/;

      cy.task('log', '    Scroll to news section');
      cy.contains('noticias', { matchCase: false }).scrollIntoView();

      cy.contains(new RegExp(regex, 'g')).then(($el) => {
        cy.task('log', '    Getting all dates');
        var thisMonth = 0;
        var older = 0;
        Array.from($el.prevObject).forEach(date => {
          const today = new Date();
          const monthsOlder = today.getMonth();
          const newsDate = new Date(date.textContent.replace( /(\d{2})-(\d{2})-(\d{4})/, '$2/$1/$3'))

          if (newsDate.getMonth() < monthsOlder) {
            older ++;
          } else {
            thisMonth ++;
          }
        });
        cy.task('log', `    Articles of this month: ${thisMonth}`);
        cy.task('log', `    Older Articles: ${older}`);
        expect(thisMonth).to.equal(0);
      });
    });
  })
};
