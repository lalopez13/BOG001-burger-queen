// you can also use a renderer like "@testing-library/react" or "enzyme/mount" here
// import React from 'react';
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from 'react-dom/test-utils';
// import { MemoryRouter } from "react-router-dom";
// import Rol from './rol.jsx'

// // app.test.js
// it("navigates rol view when you click the buton", async => {
//   // in a real test a renderer like "@testing-library/react"
//   // would take care of setting up the DOM elements
//   const root = document.createElement('div');
//   document.body.appendChild(root);

//   // Render app
//   render(
//     <MemoryRouter initialEntries={['/rol']}>
//       <Rol />
//     </MemoryRouter>,
//     root
//   );

//   // Interact with page
//   act(() => {
//     // Find the link (perhaps using the text content)
//     const goWaiterView = document.querySelector('#waiter-view');
//     // Click it
//     goWaiterView.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });

//   // Check correct page content showed up
//   expect(document.body.textContent).toBe('Waiter');
// });

// import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
// import { render, fireEvent } from '@testing-library/react';
// import { createMemoryHistory } from 'history';
// import { Link } from "react-router-dom";

// it('routes to a new view', async () => {
//   const history = createMemoryHistory();

//   // mock push function
//   history.push = jest.fn();

//   const { getByText } = render(
//     <MemoryRouter history={history}>
//       <Link to="/waiterOrder">WAITER</Link>
//     </MemoryRouter>
//   );

//   fireEvent.click(getByText('WAITER'));

//   // spy on push calls, assert on url (parameter)
//   expect(history.push).toHaveBeenCalledWith('/waiterOrder');
// });

import React from 'react';
import { render, screen } from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from "react-router-dom";
import Rol from './rol.jsx';

// app.test.js
it("Navigate to the view of the chosen role", () => {
  // in a real test a renderer like "@testing-library/react"
  // would take care of setting up the DOM elements
  const root = document.createElement('div');
  document.body.appendChild(root);

  // Render app
  render(
    <MemoryRouter >
      <Rol />
    </MemoryRouter>,
    root
  );

  // Interact with page
  act(() => {
    // Find the link (perhaps using the text content)
    const goChefView = document.querySelector('#chef-view');
    // Click it
    goChefView.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  // Check correct page content showed up
  expect(screen.getByText(/Chef/i)).toBeInTheDocument()
});