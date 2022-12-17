context("show Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/show/1");
    });
  
    it("should find show image with name and description", () => {
      cy.get("p").contains("Under");
    });
}); 