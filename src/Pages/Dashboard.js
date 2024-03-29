import React from 'react';
import { Container,Button } from '@material-ui/core';
import { userLogOut } from '../utils/Auth';
import CategoryChoose from './CategoryChoose';

const Dashboard = (props) => {
    const logout  = () => {
        userLogOut();
        props.history.push('/');
    }
    return (
        <div>
            <Container>
            <h3>Dashboard</h3>
            <CategoryChoose />

            <Button type="button" 
            color="danger"
            variant="outlined"
            onClick={logout}
            >Logout</Button>

            </Container>
            
        </div>
    )
}
export default Dashboard;