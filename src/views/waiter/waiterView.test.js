// import React from 'react';
// import {render, fireEvent} from '@testing-library/react';
// import {WaiterView} from './waiterView.jsx';

// it('renders correctly',()=>{
//     const{queryByTestId, queryByPlaceholder} = render(<WaiterView />)
//     expect(queryByTestId("order")).toBeTruthy()
// })
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import WaiterView from "./waiterView.jsx";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders correctly", () => {
    shallow(<WaiterView />);
  });
  it.skip("includes two paragraphs", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("p").length).toEqual(2);
  });
});
