// import React from "react";
// import { create } from "react-test-renderer";
// import PrimaryButton from "./primaryButton.jsx"

// describe("Button component", () => {
//   test("Matches the snapshot", () => {
//     const button = create(<PrimaryButton />);
//     expect(button.toJSON()).toMatchSnapshot();
//   });
// });
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Button from "./primaryButton.jsx"


let container = null;
beforeEach(() => {
  // configurar un elemento del DOM como objetivo del renderizado
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // limpieza al salir
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

//This test mounts a component and makes sure that it didn’t throw during rendering
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button/>, div);
});
it("renderiza con o sin nombre", () => {
  act(() => {
    render(<Button />, container);
  });
  expect(container.textContent).toBe("");

  act(() => {
    render(<Button label="START" />, container);
  });
  expect(container.textContent).toBe("START");

  act(() => {
    render(<Button label="WAITER" />, container);
  });
  expect(container.textContent).toBe("WAITER");
});