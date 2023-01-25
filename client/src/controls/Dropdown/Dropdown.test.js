import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dropdown } from "./Dropdown.jsx";

const options = ["cat", "dog", "parrot"];

describe("Dropdown component", () => {
  test("renders dropdown", () => {
    render(<Dropdown />);

    const dropdown = screen.getByRole("combobox");

    expect(dropdown).toBeInTheDocument();
  });

  test("shows options", () => {
    render(
      <Dropdown
        options={options.map((item) => {
          return {
            value: item,
            label: item,
          };
        })}
      />
    );

    const dropdown = screen.getByRole("combobox");

    userEvent.click(dropdown);

    expect(screen.getByText("parrot")).toBeInTheDocument();
    expect(screen.getByText("cat")).toBeInTheDocument();
    expect(screen.getByText("dog")).toBeInTheDocument();
  });

  test("calls onChange prop when clicked", async () => {
    const handleChange = jest.fn();

    render(
      <Dropdown
        options={options.map((item) => {
          return {
            value: item,
            label: item,
          };
        })}
        onChange={handleChange}
      />
    );

    const dropdown = screen.getByRole("combobox");

    userEvent.click(dropdown);

    const option = screen.getByText("parrot");

    userEvent.click(option);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("selects a specific option", () => {
    const handleChange = jest.fn();

    render(
      <Dropdown
        options={options.map((item) => {
          return {
            value: item,
            label: item,
          };
        })}
        onChange={handleChange}
      />
    );

    const dropdown = screen.getByRole("combobox");

    userEvent.click(dropdown);

    const option = screen.getByText("parrot");

    userEvent.click(option);

    expect(screen.getByText("parrot")).toBeInTheDocument();
    expect(screen.queryByText("cat")).not.toBeInTheDocument();
    expect(screen.queryByText("dog")).not.toBeInTheDocument();
  });

  test("has placeholder text", () => {
    render(
      <Dropdown
        options={options.map((item) => {
          return {
            value: item,
            label: item,
          };
        })}
        placeholder="Type"
      />
    );

    expect(screen.getByText(/type/i)).toBeInTheDocument();
    expect(screen.queryByText("cat")).not.toBeInTheDocument();
    expect(screen.queryByText("dog")).not.toBeInTheDocument();
    expect(screen.queryByText("parrot")).not.toBeInTheDocument();
  });

  test("has default value over placeholder text", () => {
    render(
      <Dropdown
        options={options.map((item) => {
          return {
            value: item,
            label: item,
          };
        })}
        placeholder="Type"
        value="cat"
      />
    );

    expect(screen.getByText("cat")).toBeInTheDocument();
    expect(screen.queryByText("dog")).not.toBeInTheDocument();
    expect(screen.queryByText("parrot")).not.toBeInTheDocument();
    expect(screen.queryByText(/type/i)).not.toBeInTheDocument();
  });

  // test("has correct classes", () => {
  //   render(
  //     <Dropdown
  //       width="half"
  //       options={options.map((item) => {
  //         return {
  //           value: item,
  //           label: item,
  //         };
  //       })}
  //     />
  //   );

  //   const dropdown = screen.getByRole("combobox");

  //   expect(dropdown).toHaveClass("select_half");
  // });
});
