// import React from 'react';
// import {render, fireEvent} from '@testing-library/react';
// import {WaiterView} from './waiterView.jsx';

// it('renders correctly',()=>{
//     const{queryByTestId, queryByPlaceholder} = render(<WaiterView />)
//     expect(queryByTestId("order")).toBeTruthy()
// })
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {render, fireEvent} from '@testing-library/react';
import { shallow, configure } from "enzyme";
import WaiterView from "./waiterView.jsx";
import { act as domAct } from "react-dom/test-utils";
import { act as testAct, create } from "react-test-renderer";

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

