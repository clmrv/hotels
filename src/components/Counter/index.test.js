import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

it("displays data", () => {
  const props = {
    name: "counter1",
    value: 2,
    onChange: () => {},
  };

  render(<Counter {...props} />);
  expect(screen.getByText(props.name)).toBeVisible();
  expect(screen.getByText(props.value)).toBeVisible();
});

it("guards min and max limits", () => {
  const handleChangeMock = jest.fn();

  const props = {
    name: "counter1",
    value: 1,
    maxValue: 1,
    minValue: 1,
    onChange: handleChangeMock,
  };

  render(<Counter {...props} />);

  userEvent.click(screen.getByRole("button", { name: `${props.name}-plus` }));
  userEvent.click(screen.getByRole("button", { name: `${props.name}-minus` }));
  userEvent.click(screen.getByRole("button", { name: `${props.name}-minus` }));

  expect(handleChangeMock).not.toBeCalled();
});
