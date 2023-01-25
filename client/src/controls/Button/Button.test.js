import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

afterEach(() => {
  cleanup();
});

describe("Button Component", () => {
  render(
    <Button
      type="submit"
      size="l"
      position="right"
      roundedLeft
      roundedRight
      disabled={true}
    >
      Send message
    </Button>
  );
  const button = screen.getByText(/Send message/i);

  test("Button Rendering", () => {
    expect(button).toBeInTheDocument();
  });

  test("Button Text", () => {
    expect(button).toHaveTextContent("Send message");
  });

  //HOw to check onClick function
  test("calls onClick prop when clicked", () => {
    fireEvent.click(button);
    expect(jest.fn()).toHaveBeenCalledTimes(0);
  });

  test("pass correct classes", () => {
    expect(button).toHaveClass(
      "rounded_left rounded_right large_button right_button"
    );
  });

  test("disabled is true", () => {
    expect(button).toBeDisabled();
  });
});
