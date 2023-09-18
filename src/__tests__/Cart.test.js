import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantDetails from "../components/RestaurantDetails";
import MOCK_DATA from "../__Mocks__/RestaurantDetailsMock.json";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/redux/appStore";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      Promise.resolve(MOCK_DATA);
    },
  });
});

jest.mock("../utils/useRestaurantDetails");

useRestaurantDetails.mockReturnValue({
  resDetails: MOCK_DATA?.data?.cards[0]?.card?.card?.info,
  offers:
    MOCK_DATA?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers,
  recommended:
    MOCK_DATA?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
});

test("should render Restaurant Details with Jar (19) text", async () => {
  await act(async () => {
    render(<RestaurantDetails />);
  });

  const recommendText = screen.getByText("Jar (19)");

  expect(recommendText).toBeInTheDocument();
});

test("should render 19 item on Jar (19) click", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <RestaurantDetails />
      </Provider>
    );
  });

  const recommendText = screen.getByText("Jar (19)");

  fireEvent.click(recommendText);

  const menuItems = screen.getAllByTestId("items");
  expect(menuItems.length).toBe(19);
});

test("should add items to cart on add button click", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantDetails />
        </Provider>
      </BrowserRouter>
    );
  });

  const recommendText = screen.getByText("Jar (19)");

  fireEvent.click(recommendText);

  const addButtons = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addButtons[0]);

  expect(screen.getByText("Cart1")).toBeInTheDocument();
});

test("should add items to cart page on add button click", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantDetails />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const recommendText = screen.getByText("Jar (19)");

  fireEvent.click(recommendText);

  const addButtons = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addButtons[0]);

  expect(screen.getByText(/Cart2/)).toBeInTheDocument();
  const menuItems = screen.getAllByTestId("items");
  expect(menuItems.length).toBe(22);
});
