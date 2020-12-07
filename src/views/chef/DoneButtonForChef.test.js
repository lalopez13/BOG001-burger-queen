
import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {db} from '../../firebase.js'
//const { db } = require("../../firebase.js");
import DoneButtonForChef from './DoneButtonForChef'
import data from '../../data/completeMockData.json'
import SingleOrderContext from "./SingleOrderContext";
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

test("Cambia el status de la orde a prepared", () => {

    db.collection("pedidos").doc('order1').set(data.mockData[0]);
    db.collection("pedidos").doc('order2').set(data.mockData[1]);
    db.collection("pedidos").doc('order3').set(data.mockData[2]);
    db.collection("pedidos").doc('order4').set(data.mockData[3]);


    return db.collection("pedidos").get().then((snapshot) => {
        console.log(snapshot.data)
        act(() => {
            ReactDOM.render((
                <SingleOrderContext.Provider value={[snapshot.data.order2, ()=>{}]}>
                    <DoneButtonForChef />
                </SingleOrderContext.Provider>
            ), container);
        });

        userEvent.click(screen.getAllByRole('button'))
        console.log(screen.getAllByRole('button'))

        expect(container.textContent).toBe("nada");

    });   

});

