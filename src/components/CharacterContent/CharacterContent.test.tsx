import { render } from "@testing-library/react";
import { testCharacter } from "types/testData";
import CharacterContent from "./CharacterContent";

test("renders character location/status", () => {
  const component = render(<CharacterContent {...testCharacter} />);
  expect(component).toMatchSnapshot();
});
