import { render } from "@testing-library/react";
import Card from "./Card";
import { testCharacter } from "types/testData";

test("renders learn react link", () => {
  const component = render(<Card character={testCharacter} />);
  expect(component).toMatchSnapshot();
});
