import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Login from '../Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main';
import TimeTable from '../TimeTable';

const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/timetable">
         <TimeTable />
        </Route>
        <Route path="/auth">
          <Login />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
};

export default App;
