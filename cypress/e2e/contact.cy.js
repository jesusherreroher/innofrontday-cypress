describe('Verify contact data', () => {
  beforeEach(() => {
    cy.task('log', 'Enter to web...');
    cy.visitWeb('');
    cy.closeCookies();

    cy.task('log', 'Enter to contact page');
    cy.get('[href="/contacto"]').click();
  });

  it('Validate if phone number is same in contact and legal advice', () => {
    cy.task('log', 'Get Phone number');
    cy.contains(`Teléfono`).next().next().invoke('text').as('contactTelephone');
    cy.wait(1000);
    
    cy.task('log', 'Navigate to Aviso Legal');
    cy.get('[href="aviso-legal"]').click();
    cy.closeCookies();

    cy.task('log', 'Compare both telephones');
    cy.get('@contactTelephone').then(contactTelephone => {
      const telephoneWithoutPrefix = contactTelephone.split(') ')[1];
      cy.contains(telephoneWithoutPrefix);
    });
  });

  it('Count how many times appears Faraday word', () => {
    cy.task('log', 'Check Faraday word');
    cy.get('body').contains('faraday', { matchCase: false }).then($elements => {
      cy.task('log', `Word Faraday count - ${$elements.length}`);
    });
  });

  it('Check if required fields appears', () => {
    cy.task('log', 'Send form');
    cy.contains('Enviar formulario', { matchCase: false }).click();
    cy.task('log', 'Check required field');
    cy.contains('Campo requerido');
  });

  it('Checks news article dates', () => {
    const regex = /^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/;

    cy.task('log', 'Scroll to news section');
    cy.contains('noticias', { matchCase: false }).scrollIntoView();

    cy.contains(new RegExp(regex, 'g')).then(($el) => {
      cy.task('log', 'Get all news dates');
      cy.task('log', `Total news: ${$el.prevObject}`);
      Array.from($el.prevObject).forEach(date => {
        const today = new Date();
        const monthsOlder = today.getMonth() - 2;
        const newsDate = new Date(date.textContent.replace( /(\d{2})-(\d{2})-(\d{4})/, '$2/$1/$3'))
        if (newsDate.getMonth() < monthsOlder) {
          cy.task('log', 'Article is older than 2 months');
        } else {
          cy.task('log', 'Article is newer');
        }
      });
    });
  });
})
