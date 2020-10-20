import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import waiterView from './views/waiter/waiterView.js'
import chefView from './views/chef/chefView.js'
import Home from './views/home/home.js'
import './App.scss';

function App() {
  return (
    <Router>
 <Switch>
 <Route path="/" exact component={Home} />
 {/* <Route path="/rol" component={Rol} /> */}
 <Route path="/waiterOrder" component={waiterView} />
 <Route path="/chefOrder" component={chefView} />
 </Switch>
     </Router>
 )
  
}

export default App;
