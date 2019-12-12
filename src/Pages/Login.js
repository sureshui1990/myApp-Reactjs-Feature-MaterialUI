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
                defaultValue="Username"
                />
                    
            </div>
            <div>
                <label> 
                    <input type="text" placeholder="Password" />
                </label>
            </div>

            <Button type="button"
             color="primary"
             variant="contained"
             onClick={login}>Login</Button>
            
        </div>
    )
};

export default Login;