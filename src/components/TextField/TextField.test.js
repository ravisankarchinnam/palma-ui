import React from "react";
import { render } from "@testing-library/react";
import TextField from "./TextField";

it("renders some label", () => {
  const label = "Label";
  const { getByText } = render(<TextField>{buttonLabel}</TextField>);
  expect(getByText(label)).toBeInTheDocument();
});
