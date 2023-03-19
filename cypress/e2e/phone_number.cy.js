export default () => { 
 describe('Phone Number', () => {
    beforeEach(() => {
      cy.enterContactPage();
    });

    it('Validate if phone number is same in contact and legal advice', () => {
      cy.task('log', 'Get Phone number from contact');
      cy.contains(`Teléfono`).next().next().invoke('text').as('contactTelephone');
      
      cy.task('log', 'Navigate to Aviso Legal and get phone number from legal advice');
      cy.get('[href="aviso-legal"]').click();
      cy.closeCookies();

      cy.task('log', 'Compare both telephones');
      cy.get('@contactTelephone').then(contactTelephone => {
        const telephoneWithoutPrefix = contactTelephone.split(') ')[1];
        cy.contains(telephoneWithoutPrefix);
      });
    });
  })
};