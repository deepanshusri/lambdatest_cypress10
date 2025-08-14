/// <reference types="cypress" />

describe('Sitemap Test', () => {
  let urls = [];

  before(() => {
    cy.fixture('sitemap').then((data) => {
      urls = data.urls;
    });
  });

  urls.forEach((url) => {
    it(`Visits ${url}`, () => {
      cy.visit(url);
      cy.log(`Visited: ${url}`);

      // Your assertions go here
      cy.get('body').should('exist'); // example
    });
  });
});
