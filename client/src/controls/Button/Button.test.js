import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Button } from "./Button";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
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
});
