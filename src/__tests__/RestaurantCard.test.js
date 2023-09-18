import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromomtedTag } from "../components/RestaurantCard";
import MOCKCARD from "../__Mocks__/RestaurantCardMock.json";
import "@testing-library/jest-dom";

it("should render Restaurant Card component with heading Pizza Hut ", () => {
  render(<RestaurantCard data={MOCKCARD} />);

  const heading = screen.getByRole("heading", { name: "Pizza Hut" });

  expect(heading).toBeInTheDocument();
});

it("should render Restaurant Card with Promoted tag", () => {
  const PromotedCard = withPromomtedTag(RestaurantCard);

  render(<PromotedCard data={MOCKCARD} />);

  const promotedText = screen.getByText("Promoted");

  expect(promotedText).toBeInTheDocument();
});
