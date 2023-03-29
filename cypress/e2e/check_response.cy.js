import {
  GET_METHOD,
  NEWS_ENDPOINT,
  NEW_STATUS_CODE
} from '../support/vars.cy';


export default () => {
  describe('2️⃣ Check status response', () => {
    beforeEach(() => {
      cy.enterNewsPage();
    });

    it('Check Network response ', () => {
      cy.task('log', '    Check status response');
      cy.get('body').contains('Deep Learning: ¿Qué es y cómo usarlo?').click();
      cy.url().should('include', 'que-es-deep-learning-categorizacion-de-imagenes')
      cy.checkNewsResponse(GET_METHOD,NEWS_ENDPOINT,NEW_STATUS_CODE);
    }) 
  })
};