/// <reference types="cypress"/>

context("ShowCard Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should find our welcome page and message", () => {
    const showCard = cy.get("p").contains("Under the Dome");
    showCard.click();
    cy.wait(2000);
    cy.url().should("include", "/show/");
  });
});
