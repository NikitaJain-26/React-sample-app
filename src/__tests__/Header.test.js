import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render header with Sign in button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const signInBtn = screen.getByRole("button", { name: "Sign In" });

  expect(signInBtn).toBeInTheDocument();
});

it("should render header with heading Eat and Repeat ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const heading = screen.getByRole("heading", { name: "Eat and Repeat" });

  expect(heading).toBeInTheDocument();
});
