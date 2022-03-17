describe("Filtering e2e test", () => {
  it("displays hotels with rooms", () => {
    browser.url("http://localhost:3000");
    browser.expect.elements("section").count.to.equal(4);
    browser.expect.element("main").text.to.match(/deluxe twin/i);
  });
});
