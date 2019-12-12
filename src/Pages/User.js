import React from 'react';
import { 
    Route,Redirect,
    useParams,NavLink,
    Switch
} from 'react-router-dom';

const UniqueUser = () => {
    let params = useParams();
    console.log('UniqueUser/match',params);
    return <h3>Requested topic ID: {params.userId}</h3>;
  }
const User = ({match}) => {
    // let match = useRouteMatch();
    console.log('math', match);
    return (
        <div>
            <h2>User page</h2>

            <ul>
                <li>
                    <NavLink to={`${match.url}/component`} 
                                        activeStyle={
                                            {color:'#f09'}
                                        }
                    >Specific user</NavLink>
                </li>
                <li>
                    <NavLink to={`${match.url}/ben-tennyson`} 
                    activeStyle={
                        {color:'#f09'}
                    }
                    >ben</NavLink>
                </li>
                <li>
                    <NavLink to={`${match.url}/gwen-tennyson`}
                    
                    activeStyle={
                        {color:'#f09'}
                    }>gwen</NavLink>
                </li>
            </ul>

            <Switch>
                <Route path={`${match.path}/:userId`} exact strict
                   render={ () => (  undefined ? <UniqueUser /> : <Redirect to="/" />)}
                    />

                <Route path="">
                    <h4>Please select a user</h4>
                </Route>

            </Switch>
            
        </div>
    )
}

export default User;
