class SalaryInsightsPage {
    constructor() {
      this.selectors = {
        salary_insights_tool_role_dropdown: "[data-qa=\"role-field\"] input[name=\"role\"]",
        salary_insights_tool_country_dropdown: "[data-qa=\"country-field\"] input[name=\"country\"]",
        accountant_role_option: "[data-text=\"Accountant\"]",
        qaengineer_role_option: "[data-text=\"QA Engineer\"]",
        softwareengineer_role_option: "[data-text=\"Software Engineer\"]",
        brazil_country_option: "p:contains('Brazil')",
        canada_country_option: "p:contains('Canada')",
        japan_country_option: "p:contains('Japan')",
        salary_insights_tool_search_button: "button:contains('Search')",
        salary_table_text: "[data-qa=\"salary-table\"] h2",
        salary_table_currency: "p:contains('median salary')"
        // Add more selectors but dont forget your commas
      };
    }
  
    get insightsToolRoleDropdown() {
      return cy.get(this.selectors.salary_insights_tool_role_dropdown).should('be.visible');
    }
  
    get insightsToolCountryDropdown() {
      return cy.get(this.selectors.salary_insights_tool_country_dropdown).should('be.visible');
    }
  
    get insightsToolSearchButton() {
      return cy.get(this.selectors.salary_insights_tool_search_button).should('be.visible');
    }
  
    get accountantRoleOption() {
      return cy.get(this.selectors.accountant_role_option).should('be.visible');
    }
  
    get qaEngineerRoleOption() {
      return cy.get(this.selectors.qaengineer_role_option).should('be.visible');
    }
  
    get softwareEngineerRoleOption() {
      return cy.get(this.selectors.softwareengineer_role_option).should('be.visible');
    }
  
    get canadaCountryOption() {
      return cy.get(this.selectors.canada_country_option).should('be.visible');
    }
  
    get japanCountryOption() {
      return cy.get(this.selectors.japan_country_option).should('be.visible');
    }
  
    get brazilCountryOption() {
      return cy.get(this.selectors.brazil_country_option).should('be.visible');
    }
  
    get salaryTableHeading() {
      return cy.get(this.selectors.salary_table_text); // Likely a typo, fix the selector name
    }

    get salaryTableMedianData() {
        return cy.get(this.selectors.salary_table_currency); // Likely a typo, fix the selector name
      }

    
  
    // Methods for Salary Insight Page   
    selectAccountantRole() {
      this.insightsToolRoleDropdown.click();
      this.accountantRoleOption.click(); // Picks the Accountant role to be searched for
    }
  
    selectQAEngineerRole() {
      this.insightsToolRoleDropdown.click().type('QA');
      this.qaEngineerRoleOption.click(); // Picks the QA Engineer role Option
    }
  
    selectSoftwareEngineerRole() {
      this.insightsToolRoleDropdown.click().type('SOFt');
      this.softwareEngineerRoleOption.click(); // Picks the Software Engineer Option
    }

      selectCountryBrazil() {
    this.insightsToolCountryDropdown.click().type('BR'); // Hastens search
    this.brazilCountryOption.click(); // Picks Brazil Option
  }

  selectCountryCanada() {
    this.insightsToolCountryDropdown.click().type('CA');
    this.canadaCountryOption.click(); // Picks Canada Option
  }

  selectCountryJapan() {
    this.insightsToolCountryDropdown.click().type('JA');
    this.japanCountryOption.click(); // Picks Japan Option
  }
  

  clickSalaryInsightsSearchButton() {
    this.insightsToolSearchButton.click();

    // Wait for the Selector to be visible on the page before click.
    cy.waitUntil(() => this.salaryTableHeading, {
      timeout: 5000,
      interval: 200,
    });
  }

  // Verifies the salary table text
  verifyTableDataHeading(role, country) {
    this.salaryTableHeading.invoke('prop', 'innerText').should('contain', role).and('contain', country)
  }

  // Method to verify the Data for Role and Country is present
  verifySalaryData(currency, role) {
    this.salaryTableMedianData.invoke('prop', 'innerText').should('contain', currency).and('contain', "The median salary is").and('contain', role)
  }
}

export default SalaryInsightsPage;
