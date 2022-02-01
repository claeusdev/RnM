import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

test("renders Navbar component", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  expect(getByTestId("navbar")).toBeInTheDocument();
});
