import ArticleDates from '../e2e/article_dates.cy'
import CheckAuthor from '../e2e/check_author.cy';
import PhoneNumber from '../e2e/phone_number.cy';
import RequiredField from '../e2e/required_field.cy';

ArticleDates();
CheckAuthor();
PhoneNumber();
RequiredField();

Cypress.on('uncaught:exception', (err) => {
  console.error(err);
  return false;
});
