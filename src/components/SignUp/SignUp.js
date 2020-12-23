import React, {Component, useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles';
import {  HOST, POST} from '../../shared/global-variables';
import fetchDataFromAPI from '../../shared/fetch-data';

const SignUp = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const[_login, setLogin]=useState('');
  const[_password, setPassword]=useState('');

  const handleSubmit = e =>{
      e.preventDefault();

      const data =  {
        login:_login,
        password:_password

      }
      fetchDataFromAPI(HOST + 'SignUp',POST, {'Content-Type': 'application/json'}, data)
      .then(res=>{
        console.log(res);
       
      })
      .catch(err =>{
        console.log(err);
      })
      
  }

  

  const classes = useStyles();

  

 if (error) return <div>Error: {error.message}</div>;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        {/* TODO: this example for rendering data from fetch API*/}
        {/*<div>*/}
        {/*  {data.title}*/}
        {/*</div>*/}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="login"
            label="Login"
            name="login"
            autoComplete="login"
            autoFocus
            onChange={e=>setLogin(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e=>setPassword(e.target.value)}
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;