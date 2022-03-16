import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { hotelDetails, hotelList } from "./apiData";

const waitForLoading = () =>
  waitForElementToBeRemoved(() => screen.getByTestId("loading"));

it("one big test", async () => {
  fetch.mockResponses(
    [JSON.stringify(hotelList), { status: 200 }],
    ...hotelDetails.map((details) => [JSON.stringify(details), { status: 200 }])
  );

  render(<App />);

  // displays hotels with rooms
  await waitForLoading();
  expect(screen.getByText(/obm hotel 1/i)).toBeInTheDocument();
  expect(screen.getByText(/deluxe twin/i)).toBeInTheDocument();
  expect(screen.getByText(/obm hotel 2/i)).toBeInTheDocument();

  // filters by rating
  userEvent.click(screen.getByTestId("star-button-5"));
  await waitForLoading();

  expect(screen.queryByText(/obm hotel 1/i)).not.toBeInTheDocument();
  expect(screen.getByText(/obm hotel 2/i)).toBeInTheDocument();

  userEvent.click(screen.getByTestId("star-button-1"));
  await waitForLoading();
  expect(screen.getByText(/obm hotel 1/i)).toBeInTheDocument();
  expect(screen.getByText(/obm hotel 2/i)).toBeInTheDocument();

  // filters by adults capacity
  expect(screen.getAllByText(/adults: 1/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/adults: 2/i).length).toBeGreaterThan(0);
  userEvent.click(screen.getByRole("button", { name: "Adults:-plus" }));
  await waitForLoading();

  expect(screen.queryByText(/adults: 1/i)).not.toBeInTheDocument();
  expect(screen.getAllByText(/adults: 2/i).length).toBeGreaterThan(0);

  userEvent.click(screen.getByRole("button", { name: "Adults:-minus" }));
  await waitForLoading();

  expect(screen.getAllByText(/adults: 1/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/adults: 2/i).length).toBeGreaterThan(0);
});
