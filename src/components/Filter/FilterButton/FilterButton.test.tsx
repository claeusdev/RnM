import { render } from "@testing-library/react";
import { testCharacter } from "types/testData";
import FilterButton from "./FilterButton";

test("renders filter button with all props", () => {
  const component = render(<FilterButton input="" task={() => jest.fn()} updatePageNumber={jest.fn()} index={1} name={testCharacter.name}/>);
  expect(component).toMatchSnapshot();
});
