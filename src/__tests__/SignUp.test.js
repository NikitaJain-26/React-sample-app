import { useState } from "react";
import SignUp from "../components/SignUp";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserContext } from "../utils/UserContext";


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

it("Should render Sign Up component with password input", () => {
  render(<SignUp />);

  const passwordInput = screen.getByText(/Create Password/);

  expect(passwordInput).toBeInTheDocument();
});