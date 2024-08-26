describe("favorite page test", () => {
  beforeEach(() => {
    cy.intercept(
      "https://api.apify.com/v2/datasets/XNfzEMoqfsLBT5bOT/items?token=apify_api_zvLd5bcc9q4naeNIcfU5X3oc9guZJo1npQcP",
      {
        method: "GET",
        fixture: "../fixtures/mainPage.json",
      }
    );
    cy.visit("http://localhost:3000/favorites");
  });

  it("should show page title", () => {
    cy.get("h1").contains("Favorites");
  });

  it("should have a message if no stations are favorited", () => {
    cy.get(".error-message").contains("You have no favorite gas stations yet!");
  });

  it("should navigate to main page if back button is clicked", () => {
    cy.get("h1").contains("Favorites");
    cy.get(".primary-btn").click();
    cy.get("h1").contains("Search Gas Station in CO");
  });

  it("should show favorite cards", () => {
    cy.get("a").contains("All Stations").click();
    cy.get(".single-station-card").eq(0).should("contain", "Kum & Go");
    cy.get(".heart-button").eq(0).click();
    cy.get("a").contains("Favorites").click();
    cy.get(".fav-card").eq(0).should("contain", "Kum & Go");
  });

  it("should remove favorite cards if fav button is clicked", () => {
    cy.get("a").contains("All Stations").click();
    cy.get(".single-station-card").eq(0).should("contain", "Kum & Go");
    cy.get(".heart-button").eq(0).click();
    cy.get("a").contains("Favorites").click();
    cy.get(".fav-card").eq(0).should("contain", "Kum & Go");
    cy.get(".heart-button").eq(0).click();
    cy.get(".error-message").contains("You have no favorite gas stations yet!");
  });
});
