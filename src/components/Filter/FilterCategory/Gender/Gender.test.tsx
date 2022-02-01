import { render } from "@testing-library/react";
import GenderFilter from "./Gender";

test("renders Gender Filter", () => {
  const component = render(<GenderFilter updateGender={jest.fn()} updatePageNumber={jest.fn()}/>);
  expect(component).toMatchSnapshot();
});
