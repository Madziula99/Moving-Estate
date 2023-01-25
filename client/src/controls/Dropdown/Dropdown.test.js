import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dropdown } from "./Dropdown";

afterEach(() => {
  cleanup();
});

const options = ["cat", "dog", "parrot"];

describe("Dropdown component", () => {
  render(
    <Dropdown
      placeholder="Type"
      options={options.map((item) => {
        return {
          value: item,
          label: item,
        };
      })}
      // onChange={(value) => this.setFilterParams("type", value)}
      value="cat"
    />
  );
  const dropdown = screen.getByRole("combobox");
  const all = screen.getAllByRole("option");

  test("rendering", () => {
    expect(dropdown).toBeInTheDocument();
  });

  test("selected option", () => {
    expect(all.length).toBe(3);
  });
});
