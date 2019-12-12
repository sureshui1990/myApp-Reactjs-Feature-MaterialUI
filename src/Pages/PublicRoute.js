import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {isLogin} from '../utils/Auth';

const PublicRoute = ({component: Component,restricted, ...rest}) => {
    console.log('PublicRoute // restricted',isLogin(),restricted);
    return <Route {...rest} render={(props) => (isLogin() && restricted) ? <Redirect to="/"/> : <Component {...props} />} />
}
export default PublicRoute;