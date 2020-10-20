import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import waiterView from './views/waiterView.js'
import Home from './views/home.js'
import './App.css';

function App() {
  return (
    <Router>
 <Switch>
 <Route path="/" exact component={Home} />
 {/* <Route path="/rol" component={Rol} /> */}
 <Route path="/waiterOrder" component={waiterView} />
 {/* <Route path="/chefOrder" component={chefView} /> */}
 </Switch>
     </Router>
 )
  
}

export default App;
