import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import Order from "./order";

const { db } = require("../firebase.js");
const MockFirebase = require("firebase-mock/src/firebase");

jest.mock("firebase");

const fixtureData = [
  {
    customer: "Marcos Aurelio",
    init_time: "17/11/2020, 4:00:47 p.m.",
    order: [
      {
        key: "b-01",
        price: 5,
        product: "American coffee",
        quantity: 3,
        readyChef: false,
      },
      {
        key: "b-02",
        price: 7,
        product: "Coffee with milk",
        quantity: 2,
        readyChef: false,
      },
    ],
    state: "pending",
    table: "8",
    total: 12,
  },
];

beforeEach(cleanup); // clean the Dom

// jest.mock("../firebase", () => ({
//   firebase: {
//     firestore: jest.fn(() => {
//       collection: jest.fn(() => {
//         doc: jest.fn(() => {
//           add: jest.fn();
//         });
//       });
//     }),
//   },
// }));

describe("Order commponent", () => {
  describe("success", () => {
    it("renders order component", () => {
      const { queryByTestId } = render(<Order order={fixtureData} />);
      expect(queryByTestId("order-comp")).toBeTruthy();
    });
    it("renders order component and accepts a click", () => {
      const { queryByTestId } = render(<Order order={fixtureData} />);
      expect(queryByTestId("order-comp")).toBeTruthy();
      fireEvent.click(queryByTestId("order-comp"));
    });
  });
  describe("testing adding data to firebase", () => {
    it("should adding order data ", (done) => {
      db.collection("pedidos")
        .add(fixtureData)
        .then(() => {
          done();
        });
    });
  });
});
