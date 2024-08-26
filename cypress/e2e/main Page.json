describe("Main page test", () => {
  beforeEach(() => {
    cy.intercept(
      "https://api.apify.com/v2/datasets/XNfzEMoqfsLBT5bOT/items?token=apify_api_zvLd5bcc9q4naeNIcfU5X3oc9guZJo1npQcP",
      {
        method: "GET",
        fixture: "../fixtures/mainPage.json",
      }
    );
    cy.visit("http://localhost:3000/");
  });

  it("should see the header", () => {
    cy.get("header").should("be.visible");
  });

  it("header should contain two links", () => {
    cy.get("header > nav").children("a").should("have.length", 2);
  });

  it("first link should take user to favorites page", () => {
    cy.get("header > nav")
      .children("a")
      .eq(0)
      .should("have.attr", "href", "/favorites");
  });

  it("second link should take user to All stations page", () => {
    cy.get("header > nav").children("a").eq(1).should("have.attr", "href", "/");
  });

  it("should contain input and select", () => {
    cy.get("#location-input").should("be.visible");
    cy.get("#fuel-type").should("be.visible");
  });

  it("should be able to search for a specific location", () => {
    cy.get("#location-input").type("Littleton");
    cy.get(".single-station-card")
      .eq(0)
      .should("contain", "Kum & Go")
      .and("contain", "11505 W Belleview Ave, Littleton, CO 80127");
  });

  it("should show error message if no stations found in given location", () => {
    cy.get("#location-input").type("Costa-Rica");
    cy.get(".error-message").contains(
      "There are no stations found in the selected area. Please change location or fuel type"
    );
  });

  it("should have a container for stations", () => {
    cy.get(".all-station-container").should("be.visible");
  });

  it("station container should have childrens", () => {
    cy.get(".all-station-container")
      .children(".single-station-card")
      .should("have.length", 1);

    cy.get(".single-station-card")
      .eq(0)
      .should("contain", "Kum & Go")
      .and("contain", "11505 W Belleview Ave, Littleton, CO 80127")
      .and("contain", "☎ (303) 904-9338")
      .and("contain", "⭐️ 4.6")
      .and("contain", "(44)")
      .and("contain", "Regular")
      .and("contain", "$3.20");
  });

  it("should show Regular fuel prices by default", () => {
    cy.get("select[name='fuel-type']").contains("Regular fuel prices");
  });

  it("should change fuel-type value", () => {
    cy.get(".single-station-card")
      .eq(0)
      .should("contain", "Regular")
      .and("contain", "$3.20");

    cy.get("select[name='fuel-type']").invoke("val").should("eq", "Regular");

    cy.get("select[name='fuel-type']")
      .select(1)
      .invoke("val")
      .should("eq", "Midgrade");

    cy.get(".single-station-card")
      .eq(0)
      .should("contain", "Midgrade")
      .and("contain", "$3.50");
  });

  it("should take to details page when user clicks on name", () => {
    cy.get(".single-station-card").eq(0).should("contain", "Kum & Go");
    cy.get(".single-station-card").eq(0).contains("Kum & Go").click();
    cy.get(".details h1").contains("Kum & Go");
  });

  it("should be able to favorite and unfavorite station by click", () => {
    cy.get("a").contains("Favorites").click();
    cy.get(".error-message").contains("You have no favorite gas stations yet!");

    //Favoriting
    cy.get("a").contains("All Stations").click();
    cy.get(".single-station-card").eq(0).should("contain", "Kum & Go");
    cy.get(".heart-button").eq(0).click();
    cy.get("a").contains("Favorites").click();
    cy.get(".fav-card").eq(0).should("contain", "Kum & Go");

    //Unfavoriting
    cy.get("a").contains("All Stations").click();
    cy.get(".single-station-card").eq(0).should("contain", "Kum & Go");
    cy.get(".heart-button").eq(0).click();
    cy.get("a").contains("Favorites").click();
    cy.get(".error-message").contains("You have no favorite gas stations yet!");
  });
});

describe("Server-side error", () => {
  beforeEach(() => {
    cy.intercept(
      "https://api.apify.com/v2/datasets/XNfzEMoqfsLBT5bOT/items?token=apify_api_zvLd5bcc9q4naeNIcfU5X3oc9guZJo1npQcP",
      {
        method: "GET",
      },
      {
        statusCode: 500,
      }
    );
    cy.visit("http://localhost:3000/");
  });

  it("Should not show card container if fetch failed", () => {
    cy.get(".all-station-container").should("not.exist");
  });

  it("should show error message", () => {
    cy.get(".error-message").should("contain", "Unexpected end of JSON input");
  });
});
