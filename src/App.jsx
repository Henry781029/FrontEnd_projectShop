import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/registerUser';
import Product from './components/Product/registerProduc'

function App  () {
    return (
       <Router>
            <Switch>
               <Route
               exact path = '/login'><Login/>
               </Route>
              <Route
               exact path = '/register'><Register/>
              </Route>
              <Route
               exact path = '/product'><Product/>
              </Route>
           </Switch>
       </Router>
    );
}


export default App;
