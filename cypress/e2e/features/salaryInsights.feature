# Authored by Stephanie Nakpodia on 01/08/2024

Feature: Salary Insights: Salary based on Roles and Country 
  Salary Insights Data based on Country and Roles selected will be tested

Scenario: Verify that selecting a Role and Country for Accountant in Brazil shows an accurate Salary Data
    When I select the "Accountant Role"
    And I select the "Country - Brazil" 
    And I click the "Salary Insights Search Button"
   Then I should see the "Salary Data" for an Accountant in Brazil

Scenario: Verify that selecting a Role and Country for QA Engineer in Canada an accurate Salary Data
    When I select the "QA Engineer Role"
    When I select the "Country - Canada" 
    And I click the "Salary Insights Search Button"
   Then I should see the "Salary Data" for a QA Engineer in Canada

Scenario: Verify that selecting a Role and Country for Software Engineer in Japan an accurate Salary Data
    When I select the "Software Engineer Role"
    When I select the "Country - Japan" 
    And I click the "Salary Insights Search Button"
   Then I should see the "Salary Data" for a Software Engineer in Japan
 
      





