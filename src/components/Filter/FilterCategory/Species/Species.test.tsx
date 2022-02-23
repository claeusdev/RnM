import { render } from "@testing-library/react";
import SpeciesFilter from "./Species";

test("renders character location/status", () => {
  const component = render(<SpeciesFilter updateSpecies={jest.fn()} updatePageNumber={jest.fn()}/>);
  expect(component).toMatchSnapshot();
});
