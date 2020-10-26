import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import waiterView from './views/waiter/waiterView.js'
import chefView from './views/chef/chefView.js'
import Home from './views/home/home.js'
import Rol from './views/rol/rol.js'
import Modal from "./views/modal/modal.js"

function App() {
  return (
    <Router>
 <Switch>
 <Route path="/" exact component={Home} />
 <Route path="/rol" component={Rol} />
 <Route path="/waiterOrder" component={waiterView} />
 <Route path="/chefOrder" component={chefView} />
 <Route path="/modalejemplo" component={Modal} />
 </Switch>
     </Router>
 )
  
}

export default App;
