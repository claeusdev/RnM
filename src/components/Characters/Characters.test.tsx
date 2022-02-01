import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { testCharacter } from "types/testData";
import Characters from "./Characters";

test("renders lists of characters", () => {
  const component = render(<BrowserRouter>
    <Characters page="/character/" results={[testCharacter]}/>
  </BrowserRouter>);
  expect(component).toMatchSnapshot();
});
