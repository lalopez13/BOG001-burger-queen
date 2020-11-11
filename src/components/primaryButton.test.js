import React from "react";
import { create } from "react-test-renderer";
import PrimaryButton from "./primaryButton.jsx"

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const button = create(<PrimaryButton />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});