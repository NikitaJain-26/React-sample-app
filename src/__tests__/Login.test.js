import LoginPage from "../components/LoginPage";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Login Page component with 2 input", () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );

  const inputBox = screen.getAllByRole("textbox");

  expect(inputBox.length).toBe(1);
});

it("Should render Login Page component with 4 button", () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );

  const button = screen.getAllByRole("button");

  expect(button.length).toBe(2);
});

it("Should render Login Page component with Sign In button", () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );

  const createButton = screen.getByText("Sign In");

  expect(createButton).toBeInTheDocument();
});
