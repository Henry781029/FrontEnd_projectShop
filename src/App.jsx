import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/registerUser';
import Product from './components/Product/registerProduc';
import List from './components/List/listProduct';
import Layout from './components/Layout/Layout';
import Album from './components/Album/albumProduct';

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
              <Route
               exact path = '/list'><List/>
              </Route>
              <Route
               exact path = '/App'><Layout/>
              </Route>
              <Route
               exact path = '/album'><Album/>
              </Route>
           </Switch>
       </Router>
    );
}


export default App;
