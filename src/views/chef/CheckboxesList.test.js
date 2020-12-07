
import {waitFor , render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {db} from '../../firebase.js'
//const { db } = require("../../firebase.js");
import CheckboxesList from './CheckboxesList'
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
            <SingleOrderContext.Provider value={[data.mockData[0], ()=>{}]}>
                <CheckboxesList />
            </SingleOrderContext.Provider>
        ), container);
    });

    expect(container.textContent).toBe("5American coffee1Ham and cheese sandwich1Natural fruit juice");
});

test("Checkboxes change on click", () => {

    db.collection("pedidos").doc('order1').set(data.mockData[0]);
    db.collection("pedidos").doc('order2').set(data.mockData[1]);
    db.collection("pedidos").doc('order3').set(data.mockData[2]);
    db.collection("pedidos").doc('order4').set(data.mockData[3]);


    return db.collection("pedidos").get().then((snapshot) => {
        console.log(snapshot.data)
        act(() => {
            ReactDOM.render((
                <SingleOrderContext.Provider value={[snapshot.data.order1, ()=>{}]}>
                    <CheckboxesList />
                </SingleOrderContext.Provider>
            ), container);
        });

        userEvent.click(screen.getAllByRole('checkbox')[0])
        console.log(screen.getAllByRole('checkbox')[0].checked)

        act(() => {
            ReactDOM.render((
                <SingleOrderContext.Provider value={[snapshot.data.order1, ()=>{}]}>
                    <CheckboxesList />
                </SingleOrderContext.Provider>
            ), container);
        });

        expect(screen.getAllByRole('checkbox')[0].checked).toEqual(true)

    });   

});