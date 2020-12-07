
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { configure } from "enzyme";
import { act } from "react-dom/test-utils";
import Item from "./item.jsx";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
const fakeItem = {
        "id": "hm-02",
        "product": "Double burger",
        "type": "Lunch",
        "price": 15
  };

  
    it("should render the item component", () => {
   act( () => {
        render(<Item product={fakeItem.product} price={fakeItem.price} />, container);
      });
      expect(container.querySelector("p").textContent).toBe(fakeItem.product);
    });
