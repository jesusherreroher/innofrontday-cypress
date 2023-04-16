import ArticleDates from '../e2e/article_dates.cy'
import CheckResponse from '../e2e/check_response.cy';
import PhoneNumber from '../e2e/phone_number.cy';
import RequiredField from '../e2e/required_field.cy';

ArticleDates();
CheckResponse();
PhoneNumber();
RequiredField();

Cypress.on('uncaught:exception', (err) => {
  console.error(err);
  return false;
});
