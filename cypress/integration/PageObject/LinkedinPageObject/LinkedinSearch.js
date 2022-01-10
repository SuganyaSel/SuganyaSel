const selectors = {
  searchIcon: '.search-global-typeahead__collapsed-search-button-text.t-black--light.t-12.t-normal',
  searchTextBox: '#global-nav-typeahead',
  jobsButton: '//button[text()="Jobs"]',
  experienceLevelButton: '//button[text()="Experience Level"]',
  midLevelSeniorCheckbox: 'input[id ="experience-4"]',
  showResultsButton: '//span[@class = "artdeco-button__text"]',
  checkFilters: '.artdeco-pill.artdeco-pill--slate.artdeco-pill--2.artdeco-pill--choice.artdeco-pill--selected.ember-view.search-reusables__filter-pill-button',
  allFilters: "//button[text() = 'All filters']",
  fullTimeCheckbox: "//span[text() = 'Full-time']",
}

module.exports = {
  globalSearch() {
    cy.get(selectors.searchIcon).click();
    cy.get(selectors.searchTextBox).type('sales').type('{enter}');
    cy.wait(3000);
    cy.xpath(selectors.jobsButton).click();
    cy.wait(3000);  
    cy.xpath(selectors.experienceLevelButton).click();
    cy.wait(3000);
    cy.get(selectors.midLevelSeniorCheckbox).check({ force: true });
    cy.wait(5000);
    cy.xpath(selectors.showResultsButton).contains('Show 16K+ results').click({ force: true });
    cy.wait(5000);
    cy.get(selectors.checkFilters).contains("Mid-Senior level");
  },
  checkAllFilters() {
    cy.xpath(selectors.allFilters).click();
    cy.xpath(selectors.fullTimeCheckbox).first().click();
    cy.wait(3000);
    cy.xpath(selectors.showResultsButton).contains('Show 16K+ results').click({ force: true });
  }

}
