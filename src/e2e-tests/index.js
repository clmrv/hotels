describe("Filtering e2e test", () => {
  it("displays hotels with rooms", () => {
    browser.url("http://localhost:3000");
    browser.expect.elements("section").count.to.equal(4);
    browser.expect.element("main").text.to.match(/deluxe twin/i);
  });

  it("filters hotels by rating", () => {
    browser.click("[data-testid=star-button-5]");
    browser.waitForElementNotPresent("[data-testid=loading]");

    browser.expect.element("main").text.not.to.match(/obm hotel 1/i);
    browser.expect.element("main").text.to.match(/obm hotel 2/i);

    browser.click("[data-testid=star-button-1]");
    browser.waitForElementNotPresent("[data-testid=loading]");

    browser.expect.element("main").text.to.match(/obm hotel 1/i);
    browser.expect.element("main").text.to.match(/obm hotel 2/i);
  });
});
