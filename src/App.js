import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import waiterView from './views/waiter/waiterView.js'
import ChefView from './views/chef/ChefView.jsx'
import Home from './views/home/home.js'
import './App.scss';

function App() {
  return (
    <Router>
 <Switch>
 <Route path="/" exact component={Home} />
 {/* <Route path="/rol" component={Rol} /> */}
 <Route path="/waiter" component={waiterView} />
 <Route path="/chef" component={ChefView} />
 </Switch>
     </Router>
 )
  
}

export default App;
