import React, {useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import useStyles from './styles';
import { useState} from 'react';
import {  HOST, POST} from '../../shared/global-variables';
import {fetchDataFromAPI} from '../../shared/fetch-data';

const Header = () => {

  

  const handleSubmit = e =>{
    e.preventDefault();
    window.location.reload();
    fetchDataFromAPI(HOST + 'Logout',POST, {'Authorization' : localStorage.getItem('auth')})
    .then(res=>{
      console.log(res);
      
    })
    .catch(err =>{
      console.log(err);
    })
    localStorage.clear();
    
    
    
}

  const classes = useStyles();
  let buttons;
  
    if (localStorage.getItem('auth')){
    buttons = (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Welcome to ESchool
            </Typography>

              
            
            <Link to={'/schedule'}>
              <Button color="inherit">Schedule</Button>
            </Link>
            <Link to={'/'}>
              <Button color="inherit">Home</Button>
            </Link>
            <Button color="inherit" onClick={handleSubmit}>Logout</Button>
            
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  else {buttons = (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome to ESchool
          </Typography>
         
          <Link to={'/schedule'}>
            <Button color="inherit">Schedule</Button>
          </Link>
          <Link to={'/signup'}>
            <Button color="inherit">Sign UP</Button>
          </Link>
          <Link to={'/auth'}>
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
return(buttons);
}



export default Header;
