import React from 'react'
import PendingOrdersList from './PendingOrdersList'
import '@testing-library/jest-dom/extend-expect'
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

    expect(container.textContent).toBe("Click an order to see its details");
});

