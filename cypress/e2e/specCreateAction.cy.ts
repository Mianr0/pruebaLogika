describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')


    cy.get('[data-cy="username"]').type("a.berrio@yopmail.com");
    cy.get('[data-cy="password"]').type("AmuFK8G4Bh64Q1uX+IxQhw==");
    cy.get('[data-cy="login-btn"]').click();

    cy.url().should("include", "/dashboard");
  
    cy.get('[data-cy="loadingTable"]').should("be.visible");


    cy.get('[data-cy="buttonOpenModal"]').click();

    cy.get('[data-cy="modalContent"]').should("be.visible");

    cy.get('[data-cy="nameAdd"]').type("abc");
    cy.get('[data-cy="descriptionAdd"]').type("descripcion abc");
    cy.get('[data-cy="fileAdd"]').selectFile("./src/assets/logoLogin.svg");
    cy.get('[data-cy="colorAdd"]').then((input) => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      )?.set;
      nativeInputValueSetter?.call(input[0], "#ff00cc");
      input[0].dispatchEvent(new Event("input", { bubbles: true }));
    });
    cy.get('[data-cy="statusAdd"]').check({ force: true });
    cy.get('[data-cy="saveButton"]').click();


  })
})