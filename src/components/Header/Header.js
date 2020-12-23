import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import useStyles from './styles';
import { useState} from 'react';
import {  HOST, POST} from '../../shared/global-variables';
import fetchDataFromAPI from '../../shared/fetch-data';

const Header = () => {


  const handleSubmit = e =>{
    e.preventDefault();

   
  
  
    
    fetchDataFromAPI(HOST + 'Logout',POST, {'Content-Type': 'application/json', 'Authorization': localStorage.getItem('auth')})
    .then(res=>{
      console.log(res);
      
    })
    .catch(err =>{
      console.log(err);
    })
    
}

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome to ESchool
          </Typography>
          <Link to={'/signup'}>
            <Button color="inherit">Sign UP</Button>
          </Link>
          <Link to={'/auth'}>
            <Button color="inherit">Login</Button>
          </Link>
          
            <Button color="inherit" onClick={handleSubmit}>Logout</Button>
          
          <Link to={'/schedule'}>
            <Button color="inherit">Schedule</Button>
          </Link>
          <Link to={'/'}>
            <Button color="inherit">Home</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
