import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login'

export const App = () => {
    return (
       <Router>
            <Switch>
               <Route
               exact pacth = "/"><Login/>
               </Route>
           </Switch>
       </Router>
    )
}


export default App;
