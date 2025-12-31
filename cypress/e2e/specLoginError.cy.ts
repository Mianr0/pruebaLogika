describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')


    cy.get('[data-cy="username"]').type("pepito@yopmail.com");
    cy.get('[data-cy="password"]').type("123456");
    cy.get('[data-cy="login-btn"]').click();

    cy.get('[data-cy="authError"]').contains("Error");
  })
})