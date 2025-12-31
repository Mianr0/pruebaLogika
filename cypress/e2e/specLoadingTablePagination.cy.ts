describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')


    cy.get('[data-cy="username"]').type("a.berrio@yopmail.com");
    cy.get('[data-cy="password"]').type("AmuFK8G4Bh64Q1uX+IxQhw==");
    cy.get('[data-cy="login-btn"]').click();

    cy.url().should("include", "/dashboard");

  cy.wait(1000);

    cy.get('.MuiTablePagination-actions').should('be.visible');

    cy.get('[data-cy="loadingTable"]').find('.MuiDataGrid-row').should("have.length.at.least", 5);

    cy.get('button[aria-label="Go to next page"]').click();

    cy.wait(1000);

    cy.get('[data-cy="loadingTable"]').find('.MuiDataGrid-row').should("have.length.at.least", 5);
  })
})