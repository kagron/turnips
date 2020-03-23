import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthenticatedRoute from '../AuthenticatedRoute';

const App = () => {
    handleMeteorLogout = () => {
        Meteor.logout();
        return <Redirect to="/login" push />
    };
    return (
        <Router>
            <Switch>
                <Route path="/logout" render={handleMeteorLogout} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <AuthenticatedRoute
                    checkType="checkIsLoggedIn"
                    path="/"
                    component={Home}
                />
            </Switch>
        </Router>
    )
};

export default App;
