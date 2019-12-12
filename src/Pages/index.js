import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Link
} from 'react-router-dom';

import { Container } from '@material-ui/core';

import Home from './Home';
import About from './About';
import User from './User';
import Login from './Login';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Dashboard from './Dashboard';

export default () => {
        return (
            <Container>

                <Router>
                    <div>
                        <nav>
                            <ul className="list-unstyled border p-2 d-flex justify-content-center">
                                <li className="p-1 mx-2">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="p-1 mx-2">
                                    <Link to="/login">Login</Link>
                                </li>
                                <li className="p-1 mx-2">
                                    <Link to="/user">User</Link>
                                </li>
                                <li className="p-1 mx-2">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="p-1 mx-2">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                            </ul>

                        </nav>

                        <Switch>
                            <PublicRoute restricted={false} exact path="/" component={Home} />
                            <PublicRoute restricted={true} exact path="/login" component={Login} />
                            <PrivateRoute exact path="/dashboard" component={Dashboard} />
                            <PrivateRoute exact path="/user" component={User}  />
                            <PrivateRoute exact path="/about" component={About} />
                        </Switch>
                    </div>
                </Router>

            </Container>
        )
}