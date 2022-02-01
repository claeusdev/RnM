import { render } from "@testing-library/react";
import { testCharacter } from "types/testData";
import GenderFilter from "./Gender";

test("renders Gender Filter", () => {
  const component = render(<GenderFilter updateGender={jest.fn()} updatePageNumber={jest.fn()}/>);
  expect(component).toMatchSnapshot();
});
