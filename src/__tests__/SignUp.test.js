import SignUp from "../components/SignUp";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
it("Should render Sign Up component with 3 input", () => {
  render(<SignUp />);

  const inputBox = screen.getAllByRole("textbox");

  expect(inputBox.length).toBe(3);
});

it("Should render Sign Up component with button", () => {
  render(<SignUp />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

it("Should render Sign Up component with Create button", () => {
  render(<SignUp />);

  const createButton = screen.getByText("Create");

  expect(createButton).toBeInTheDocument();
});
