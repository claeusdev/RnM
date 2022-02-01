import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Details from "./CardDetails";


test("renders Character details", () => {
  const component = render(<BrowserRouter>
    <Details  />
  </BrowserRouter>);
  expect(component).toMatchSnapshot();
});
