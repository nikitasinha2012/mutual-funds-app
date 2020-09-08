import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router';
import HomePage from './Components/HomePage';
import SignUp from './Components/SignUp';
import Details from './Components/Details';
import Authorization from './Components/Authorization';




const Routes = () => {
    return(
        <Router>
            <Switch>
            <Route path="/" component={SignUp} exact={true} />
            <Route path="/details" component={Details} exact={true} />
            <Route path="/home" component={HomePage} exact={true} />
            </Switch>
        </Router>
    );
    }
export { Routes }


