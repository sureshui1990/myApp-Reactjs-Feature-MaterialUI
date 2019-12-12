import React from 'react';
import { Button,Input } from '@material-ui/core';
import { userLogin } from '../utils/Auth';

const Login = (props) => {
    console.log('login props',props);

    const login = () => {
        userLogin();
        props.history.push('/dashboard');
    }
    return (
        <div>
            <h3>Login</h3>
            <div>
                <Input 
                autoFocus={true}
                color="primary"
                placeholder="Username"
                required={true}
                type='text'
                />
                    
            </div>
            <div>
            <Input 
                autoFocus={true}
                color="primary"
                placeholder="Password"
                required={true}
                type='password'
                />
            </div>

            <Button type="button"
             color="primary"
             variant="contained"
             onClick={login}>Login</Button>
            
        </div>
    )
};

export default Login;