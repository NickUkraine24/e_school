import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const App = () => {
  return (
    <Router>
      <Header/>
      <h1>Main page</h1>

      <Switch>
        <Route path="/auth">
          <AuthPage />
        </Route>
      </Switch>

      <Footer/>
    </Router>
  );
};

export default App;
