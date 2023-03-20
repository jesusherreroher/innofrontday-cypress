import {
  GET_METHOD,
  NEWS_ENDPOINT,
  NEW_STATUS_CODE,
  NEW_AUTHOR
} from '../support/vars.cy';


export default () => {
  describe('2️⃣ Check author', () => {
    beforeEach(() => {
      cy.enterNewsPage();
    });

    it('Check Network response ', () => {
      cy.task('log', '    Check the Author of the new');
      cy.get('body').contains('Deep Learning: ¿Qué es y cómo usarlo?').click();
      cy.checkinterceptResponse(GET_METHOD,NEWS_ENDPOINT,'checkAuthor',NEW_STATUS_CODE,NEW_AUTHOR);
    }) 
  })
};