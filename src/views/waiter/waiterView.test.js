import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import WaiterView from "./waiterView.jsx";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders correctly", () => {
    shallow(<WaiterView />);
  });
  it("includes a navbar", () => {
    const wrapper = shallow(<WaiterView />);
    expect(wrapper.find("nav")).toBeTruthy();
  });

});

