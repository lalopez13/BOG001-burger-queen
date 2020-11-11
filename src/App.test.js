import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Rol from "./views/rol/rol.jsx";
import NotFound from "./views/404/404.jsx";
import App from "./App.jsx"

// test utils file
const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, { wrapper: Router })
}
it("renders without errors", ()=>{
  render(<App />)
})


describe("unit-test for router", () => {
  test('landing on a rol page', () => {
    renderWithRouter(<Rol />, { route: '/rol' })
    // verify page content for expected route
    expect(screen.getByText(/WAITER/i)).toBeInTheDocument()
  });
  test('landing not found page', () => {
    renderWithRouter(<NotFound />, { route: '' })
    expect(screen.getByText(/Home/i)).toBeInTheDocument()
  })
})