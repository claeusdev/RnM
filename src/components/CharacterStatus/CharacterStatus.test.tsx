import { render } from "@testing-library/react";
import { testCharacter } from "types/testData";
import CharacterStatus from "./CharacterStatus";

test("renders learn react link", () => {
  const component = render(<CharacterStatus {...testCharacter} />);
  expect(component).toMatchSnapshot();
});
