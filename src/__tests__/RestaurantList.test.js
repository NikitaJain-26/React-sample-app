import RestaurantList from "../components/RestaurantList";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCKDATA from "../__Mocks__/RestaurantListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCKDATA);
    },
  });
});
it("should render Restaurant List component with 15 card", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <RestaurantList />
      </BrowserRouter>
    )
  );

  const resCard = screen.getAllByTestId("restaurant-card");

  expect(resCard.length).toBe(9);
});

it("should test search functionality for KFC", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <RestaurantList />
      </BrowserRouter>
    )
  );

  const resCardBeforeSearch = screen.getAllByTestId("restaurant-card");

  expect(resCardBeforeSearch.length).toBe(9);

  const inputSearch = screen.getByTestId("search");

  fireEvent.change(inputSearch, { target: { value: "kfc" } });

  const resCardafterSearch = screen.getAllByTestId("restaurant-card");

  expect(resCardafterSearch.length).toBe(1);
});
