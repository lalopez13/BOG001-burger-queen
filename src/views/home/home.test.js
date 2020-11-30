import React from "react";
import { mount, configure } from "enzyme";
import { MemoryRouter as Router, Link } from "react-router-dom";
import Home from "./home.jsx";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Home Component test cases", () => {
  it("simulate the click event on Button", () => {
    const wrapper = mount(
      <Router>
        <Home />
      </Router>
    );
    expect(wrapper.find(Link)).toBeTruthy();
    expect(wrapper.find("Link").prop("to")).toEqual("/rol");
  });
});
