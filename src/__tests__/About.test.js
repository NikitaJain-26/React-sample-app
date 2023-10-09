import About from "../components/About";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should render About component with img", () => {
  render(<About />);

  const img = screen.getByRole("img");

  expect(img).toBeInTheDocument();
});
