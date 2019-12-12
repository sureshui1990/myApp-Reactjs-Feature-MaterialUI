import React, { Component } from 'react';
import axios from 'axios';
import { Select, MenuItem,InputLabel,FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth:300
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));

const SelectDropdown = props => {
    const { user } = props;
    const classes = useStyles();
    const getUserDetails = event => {
        console.log('event',event.target.value)
    }

    return <FormControl>
    <InputLabel id="userId">User</InputLabel>
    <Select className={classes.formControl}
    labelId="userId"
    id="user-select"
    onChange={getUserDetails}
    >
        {user && user.map( eachUser => <MenuItem value={eachUser}>{eachUser.name}</MenuItem>)}
        </Select>
        </FormControl>

}

export default class CategoryChoose extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            items:[],
            isLoaded: false,
        }
    }

    componentDidMount() {
        
        axios.get( 'https://jsonplaceholder.typicode.com/users')
        .then(res => {
            this.setState({isLoaded: true});
            const persons = res.data;
            this.setState({ items: persons });
            this.setState({isLoaded: false});
          }).catch( err => console.log('err',err));
                
    }


    

    render() {
        const {isLoaded, items} = this.state;
        console.log('this.state',this.state);



        if(isLoaded) {
            return (
                <div> Loading... </div>
            )
        }
        return (
            <div>
                <h2>CategoryChoose</h2>

                <SelectDropdown user={items} />
                
            </div>
        )
    }
}
