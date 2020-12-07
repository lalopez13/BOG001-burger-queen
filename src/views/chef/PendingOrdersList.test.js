
import {waitFor , render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {db} from '../../firebase.js'
//const { db } = require("../../firebase.js");
import PendingOrdersList from './PendingOrdersList'
import data from '../../data/completeMockData.json'
import SingleOrderContext from "./SingleOrderContext";
import '@testing-library/jest-dom/extend-expect'
import TestRenderer from 'react-test-renderer';
import { act } from "react-dom/test-utils";
import ReactDOM from 'react-dom'

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

test("Muestra la lista de los productos del pedido con su cantidad", () => {
    act(() => {
        ReactDOM.render((
          <PendingOrdersList />            
        ), container);
    });

    expect(container.textContent).toBe("5American coffee1Ham and cheese sandwich1Natural fruit juice");
});

