describe("Page404", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/notexist");
  });

  it("should have an error message", () => {
    cy.get(".error-message").should("to.be.visible");
    cy.get(".error-message > h2").should("contain", "Oops!");
    cy.get(".error-message > p").should(
      "contain",
      "Page 404: Sorry, page does not exist!"
    );
  });

  it("should have a go back button that brings to main page", () => {
    cy.get(".primary-btn").click();
    cy.get("h1").should("contain", "Search Gas Station in CO");
  });
});
