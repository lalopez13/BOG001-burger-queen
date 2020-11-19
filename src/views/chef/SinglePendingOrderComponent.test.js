import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import User from "./user";

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

it("renderiza datos de usuario", async () => {
  const fakeOrder = {
    data:{
      customer: 'Antonia Santos',
      table: 15,
      init_time: '18 Nov 2020; 12:20pm',
      done_time: '18 Nov 2020; 12:45pm',
    }
    

  
});