const mainUrl = "http://localhost:9000";

const login = (cy: any) => {
  cy.get("input[name='email']")
    .type("demo@masoudit.com")
    .should("have.value", "demo@masoudit.com");
  cy.get("input[name='password']").type("demMo@123");
  cy.get("button[type='submit'].btn-block").click();
};
describe("auth senario testing", () => {
  it("check login page completly loaded", () => {
    cy.visit(`${mainUrl}/login`);
    cy.get("h1.font-bold").contains("Sign in to");
    cy.wait(3000);
  });

  it("check login button reachable on mobile view", () => {
    cy.viewport(320, 740);
    cy.visit(`${mainUrl}/login`);
    cy.get("button[type='submit'].btn-block");
    cy.wait(3000);
  });

  it("check protected url", () => {
    cy.visit(`${mainUrl}/dashboard`);
    cy.wait(3000);
    // must be redirect
    cy.url().should("eq", `${mainUrl}/login`);
    cy.wait(3000);
  });

  it("check not define url return 404", () => {
    cy.visit(`${mainUrl}/not-found`);
    cy.wait(3000);
    // must be redirect
    cy.get("h1").contains("404");
    cy.wait(3000);
  });

  it("check validation on reigster page", () => {
    cy.visit(`${mainUrl}/register`).wait(1000);
    cy.get("input[name='email']")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");

    cy.get("button[type='submit'].btn-block").click();

    cy.get("input[name='password']").should("have.class", "input-error");
  });

  it("check validation on login page", () => {
    cy.visit(`${mainUrl}/login`).wait(1000);
    cy.get("input[name='email']")
      .type("demo@masoudit.com")
      .should("have.value", "demo@masoudit.com");

    cy.get("button[type='submit'].btn-block").click();
    cy.get("input[name='password']").should("have.class", "input-error");
    cy.wait(3000);
  });

  it("check user redirected after login", () => {
    cy.visit(`${mainUrl}/login`);
    login(cy);
    cy.wait(3000);
    cy.url().should("eq", `${mainUrl}/dashboard`);
  });

  it("check list of articles loaded completely", () => {
    cy.visit(`${mainUrl}/login`);
    login(cy);

    cy.wait(1000);
    cy.get("table tbody tr").should("have.length", 10);
    cy.wait(1000);
  });

  it("check dialog confirm remove shown", () => {
    cy.visit(`${mainUrl}/login`);
    login(cy);
    cy.wait(1000);
    cy.get("button.btn").contains("Delete").click();
    cy.get("#react-confirm-alert").should("exist");
  });

  it("check open add new Article work truly", () => {
    // cy.get(".other-info .mb-2 p").contains("1787525707");
  });
});
