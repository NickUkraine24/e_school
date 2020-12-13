import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './styles';
import { GET, GET_POSTS } from '../../shared/global-variables';
import fetchDataFromAPI from '../../shared/fetch-data';

const Login = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    fetchDataFromAPI(GET_POSTS + '1', GET)
      .then(
        (response) => {
          console.log(response.data);
          setData(response.data);
        },
        (error) => {
          setError(error);
        })
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
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
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
