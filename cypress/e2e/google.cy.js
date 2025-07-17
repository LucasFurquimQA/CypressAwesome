describe('Google Home', () => {
  it('should load Google and check the title', () => {
    cy.visit('https://www.google.com')
    cy.title().should('include', 'Google')
  })
})
