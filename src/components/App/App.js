import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import Login from '../Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main';
import Schedule from '../Schedule';
import SignUp from '../SignUp';
import Logout from '../Logout'


const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
      
        
        <Route path="/auth"><Login/></Route>
        
        <Route path="/schedule"><Schedule /></Route>
        <Route exact path="/"><Main /></Route>
        <Route path="/signup"><SignUp/></Route>
        
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;
