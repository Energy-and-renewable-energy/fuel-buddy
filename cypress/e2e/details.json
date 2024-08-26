describe("details page test", () => {
  beforeEach(() => {
    cy.intercept(
      "https://api.apify.com/v2/datasets/XNfzEMoqfsLBT5bOT/items?token=apify_api_zvLd5bcc9q4naeNIcfU5X3oc9guZJo1npQcP",
      {
        method: "GET",
        fixture: "../fixtures/mainPage.json",
      }
    );
    cy.visit("http://localhost:3000/");
    cy.get(".single-station-card").eq(0).contains("Kum & Go").click();
  });

  it("should have title", () => {
    cy.get("h1").contains("Kum & Go");
  });

  it("should have address", () => {
    cy.get("h3").contains("11505 W Belleview Ave, Littleton, CO 80127");
  });

  it("should have totals score and review count", () => {
    cy.get(".details-review-count").contains("⭐️ 4.6");
    cy.get(".details-review-count").contains("based on");
    cy.get(".details-review-count").contains("44 reviews");
  });

  it("should have a phone number", () => {
    cy.get(".details-phone-number").contains("☎ (303) 904-9338");
  });

  it("should show features", () => {
    cy.get(".details-features").contains("Features & Amenities");
    cy.get(".details-features > div")
      .children(".category-tag")
      .should("have.length", 6);
  });

  it("should have gas prices", () => {
    cy.get(".gas-prices-section").should("be.visible");
    cy.get(".gas-price")
      .eq(0)
      .should("contain", "Regular")
      .and("contain", "$3.20");
    cy.get(".gas-price")
      .eq(1)
      .should("contain", "Midgrade")
      .and("contain", "$3.50");
    cy.get(".gas-price")
      .eq(2)
      .should("contain", "Premium")
      .and("contain", "$3.85");
    cy.get(".gas-price")
      .eq(3)
      .should("contain", "Diesel")
      .and("contain", "$4.10");
  });

  it("should be able to favorite and unfavorite station by click", () => {
    cy.get("a").contains("Favorites").click();
    cy.get(".error-message").contains("You have no favorite gas stations yet!");

    //Favoriting
    cy.get("a").contains("All Stations").click();
    cy.get(".single-station-card").eq(0).click();
    cy.get("h2").should("contain", "Kum & Go");
    cy.get(".heart-button").click();
    cy.get("a").contains("Favorites").click();
    cy.get(".fav-card").eq(0).should("contain", "Kum & Go");

    //Unfavoriting
    cy.get("a").contains("All Stations").click();
    cy.get(".single-station-card").eq(0).click();
    cy.get(".heart-button").click();
    cy.get("a").contains("Favorites").click();
    cy.get(".error-message").contains("You have no favorite gas stations yet!");
  });

  it("should have a map with station location", () => {
    cy.get(".mapboxgl-canvas").should("be.visible");
  });

  it("should navigate to main page if buack button is clicked", () => {
    cy.get("h1").contains("Kum & Go");
    cy.get(".primary-btn").click();
    cy.get("h1").contains("Search Gas Station in CO");
  });
});
