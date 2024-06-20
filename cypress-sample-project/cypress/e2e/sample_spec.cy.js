describe('Sample Test', () => {
  it('Visits the Example Page and Checks the Title', () => {
      cy.visit('http://example.com');
      cy.title().should('include', 'Example Domain');
  });
});
