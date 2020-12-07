import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

//const { db } = require("../../firebase.js");
import CancelButtonForChef from './CancelButtonForChef'
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

test("Abre la ventana modal para cancelar el pedido", () => {
    act(() => {
        ReactDOM.render((
            <CancelButtonForChef />
        ), container);
    });
    console.log(screen.getAllByRole('button'))
    userEvent.click(screen.getAllByRole('button'))
    expect(container.textContent).toBe("juice");
});

