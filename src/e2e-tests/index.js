const assertText = (text, containerSelector = "main") =>
  browser.expect.element(containerSelector).text.to.match(text);

const assertTextMissing = (text, containerSelector = "main") =>
  browser.expect.element(containerSelector).text.not.to.match(text);

const waitForLoading = () =>
  browser.waitForElementNotPresent("[data-testid=loading]");

describe("Filtering e2e test", () => {
  it("displays hotels with rooms", () => {
    browser.url("http://localhost:3000");

    browser.expect.element("[data-testid=hotel]").to.be.present;
    browser.expect.element("[data-testid=room]").to.be.present;
  });

  it("filters hotels by rating", () => {
    browser.expect.element('[aria-label="rating filter"]').to.be.present;
    browser.click("[data-testid=star-button-5]");
    waitForLoading();

    browser.waitForElementNotPresent('[aria-label="4 out of 5 stars"]');
    browser.expect.element('[aria-label="5 out of 5 stars"]').to.be.present;

    browser.click("[data-testid=star-button-1]");
    waitForLoading();

    browser.expect.element('[aria-label="5 out of 5 stars"]').to.be.present;
    browser.expect.element('[aria-label="4 out of 5 stars"]').to.be.present;
  });

  it("filters by adult capacity", () => {
    assertText(/adults: 1/i);
    assertText(/adults: 2/i);

    browser.click('button[aria-label="Adults:-plus"]');
    waitForLoading();

    assertTextMissing(/adults: 1/i);
    assertText(/adults: 2/i);

    browser.click('button[aria-label="Adults:-minus"]');
    waitForLoading();

    assertText(/adults: 1/i);
    assertText(/adults: 2/i);
  });

  it("filters by children capacity", () => {
    assertText(/children: 0/i);
    assertText(/children: 1/i);

    browser.click('button[aria-label="Children:-plus"]');
    waitForLoading();

    assertTextMissing(/children: 0/i);
    assertText(/children: 1/i);

    browser.click('button[aria-label="Children:-minus"]');
    waitForLoading();

    assertText(/children: 0/i);
    assertText(/children: 1/i);
  });
});
