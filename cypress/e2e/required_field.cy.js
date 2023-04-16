export default () => { 
  describe('4️⃣ Required field', () => {
      beforeEach(() => {
        cy.enterContactPage();
      });

      it('Check if required field appears', () => {
        cy.task('log', '    Send form');
        cy.get('[id="maps"] .MuiButton-label').click({ force: true });
        cy.task('log', '    Check required field');
        cy.contains('Campo requerido').should('have.css','color','rgb(0, 0, 0)')
      });
    })
  };