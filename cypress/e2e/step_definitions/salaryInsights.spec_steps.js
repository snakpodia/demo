import { SalaryInsightsPage } from '../../Pages';

const salaryInsightsPage = new SalaryInsightsPage();

When('I select the "Accountant Role"', () => {
  salaryInsightsPage.selectAccountantRole();
});

When('I select the "QA Engineer Role"', () => {
  salaryInsightsPage.selectQAEngineerRole();
});

When('I select the "Software Engineer Role"', () => {
  salaryInsightsPage.selectSoftwareEngineerRole();
});


When('I select the "Country - Brazil"', () => {
  salaryInsightsPage.selectCountryBrazil();
});

When('I select the "Country - Canada"', () => {
  salaryInsightsPage.selectCountryCanada();
});

When('I select the "Country - Japan"', () => {
  salaryInsightsPage.selectCountryJapan();
});

And('I click the "Salary Insights Search Button"', () => {
  salaryInsightsPage.clickSalaryInsightsSearchButton();
});

Then('I should see the "Median Salary" for an Accountant in Brazil', () => {

  salaryInsightsPage.verifyTableDataHeading("Accountant", "Brazil");
});

Then('I should see the "Median Salary" for a QA Engineer in Canada', () => {

  salaryInsightsPage.verifyTableDataHeading("QA Engineer", "Canada");
});

Then('I should see the "Median Salary" for a Software Engineer in Japan', () => {

  salaryInsightsPage.verifyTableDataHeading();
});
