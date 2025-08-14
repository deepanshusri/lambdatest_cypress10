/// <reference types="cypress" />
const sitemap = require('../fixtures/sitemap.json');
const urls = sitemap.urls.slice(0, 50); // Optional limit

describe('JSON Sitemap Test', () => {
  urls.forEach((url) => {
    it(`Visits ${url}`, () => {
      cy.visit(url);
      cy.get('body').should('exist');
      cy.log(`Visited: ${url}`);
    });
  });
});
