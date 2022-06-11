import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { hotelDetails, hotelList } from "./mockApiData";

const waitForLoading = () =>
  waitForElementToBeRemoved(() => screen.getByTestId("loading"));

const assertText = (text) =>
  expect(screen.getAllByText(text).length).toBeGreaterThan(0);

const assertTextMissing = (text) =>
  expect(screen.queryByText(text)).not.toBeInTheDocument();

beforeEach(async () => {
  fetch.resetMocks();
  fetch.mockResponses(
    [JSON.stringify(hotelList), { status: 200 }],
    ...hotelDetails.map((details) => [JSON.stringify(details), { status: 200 }])
  );

  render(<App />);
  await waitForLoading();
});

it("displays hotels with rooms", () => {
  assertText(/obm hotel 1/i);
  assertText(/deluxe twin/i);
  assertText(/obm hotel 2/i);
});

it("filters by the rating", async () => {
  userEvent.click(screen.getByTestId("star-button-5"));
  await waitForLoading();

  assertTextMissing(/obm hotel 1/i);
  assertText(/obm hotel 2/i);

  userEvent.click(screen.getByTestId("star-button-1"));
  await waitForLoading();

  assertText(/obm hotel 1/i);
  assertText(/obm hotel 2/i);
});

it("filters by adult capacity", async () => {
  assertText(/adults: 1/i);
  assertText(/adults: 2/i);
  
  userEvent.click(screen.getByRole("button", { name: "Adults:-plus" }));
  await waitForLoading();

  assertTextMissing(/adults: 1/i);
  assertText(/adults: 2/i);

  userEvent.click(screen.getByRole("button", { name: "Adults:-minus" }));
  await waitForLoading();

  assertText(/adults: 2/i);
  assertText(/adults: 1/i);
});

it("filters by children capacity", async () => {
  assertText(/children: 0/i);
  assertText(/children: 1/i);

  userEvent.click(screen.getByRole("button", { name: "Children:-plus" }));
  await waitForLoading();

  assertTextMissing(/children: 0/i);
  assertText(/children: 1/i);

  userEvent.click(screen.getByRole("button", { name: "Children:-minus" }));
  await waitForLoading();

  assertText(/children: 0/i);
  assertText(/children: 1/i);
});
