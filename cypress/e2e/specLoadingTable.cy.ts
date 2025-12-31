describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')


    cy.get('[data-cy="username"]').type("a.berrio@yopmail.com");
    cy.get('[data-cy="password"]').type("AmuFK8G4Bh64Q1uX+IxQhw==");
    cy.get('[data-cy="login-btn"]').click();

    cy.url().should("include", "/dashboard");
  
    cy.get('[data-cy="loadingTable"]').should("be.visible");
  })
})