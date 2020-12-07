import React from "react";
import ReactDom from "react-dom";
import { mount, configure } from "enzyme";
import { render, fireEvent } from "@testing-library/react";
import Adapter from "enzyme-adapter-react-16";
import Input from "./inputs.jsx";

configure({ adapter: new Adapter() });

const orderItems = [
  {
    key: "b-01",
    price: 5,
    product: "American coffee",
    quantity: 3,
    readyChef: false,
  },
  {
    key: "b-02",
    price: 7,
    product: "Coffee with milk",
    quantity: 2,
    readyChef: false,
  },
];
const setup = () => {
  const utils = render(<Input />);
  const input = utils.getByLabelText("input-form");
  return {
    input,
    ...utils,
  };
};
describe("input component", () => {
  it("should renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Input />, div);
  });
  it("should render the label input", () => {
    const labelName = "CUSTOMER";
    const wrapper = mount(<Input label={labelName} />);
    expect(wrapper.prop("label")).toEqual(labelName);
  });
  test("It should keep the value  of the customer name", () => {
    const { input } = setup();
    expect(input.value).toBe(""); // empty before
    fireEvent.change(input, { target: { value: "Pepe Perez" } });
    expect(input.value).toBe("Pepe Perez"); //value name after
  });
});
