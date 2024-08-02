import { SalaryInsightsPage } from '../../Pages';

const salaryInsightsPage = new SalaryInsightsPage();

// Step Definitions
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

Then('I should see the "Salary Data" for an Accountant in Brazil', () => {

  salaryInsightsPage.verifyTableDataHeading('Accountant', 'Brazi')
  salaryInsightsPage.verifySalaryData('R$', 'Accountant');

});

Then('I should see the "Salary Data" for a QA Engineer in Canada', () => {

  salaryInsightsPage.verifyTableDataHeading("QA Engineer", "Canada");
  salaryInsightsPage.verifySalaryData('C$', 'QA Engineer');

});

Then('I should see the "Salary Data" for a Software Engineer in Japan', () => {

  salaryInsightsPage.verifyTableDataHeading("Software Engineer", "Japan");
  salaryInsightsPage.verifySalaryData('¥', "Software Engineer");


});
