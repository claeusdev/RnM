import { render } from "@testing-library/react";
import StatusFilter from "./Status";

test("renders character location/status", () => {
  const component = render(<StatusFilter updateStatus={jest.fn()} updatePageNumber={jest.fn()}/>);
  expect(component).toMatchSnapshot();
});
