import React from 'react'
import SinglePendingOrderComponent from './SinglePendingOrderComponent'
import data from '../../data/completeMockData.json'
import SingleOrderContext from "./SingleOrderContext";
import '@testing-library/jest-dom/extend-expect'
import { act } from "react-dom/test-utils";
import ReactDOM from 'react-dom'
//const { db } = require("../../firebase.js");

jest.mock('firebase')



let container;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

test("Muestra la lista de los detalles de la orden con su usuario", () => {
    act(() => {
        ReactDOM.render((
            <SingleOrderContext.Provider value={[data.mockData[0], ()=>{}]}>
                <SinglePendingOrderComponent />
            </SingleOrderContext.Provider>
        ), container);
    });

    expect(container.textContent).toBe("5American coffee1Ham and cheese sandwich1Natural fruit juice");
});

