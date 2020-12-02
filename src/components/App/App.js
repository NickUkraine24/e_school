import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage';
import Header from './Header';
import Footer from './Footer';
const App = () => {
  return (
    <Router>
      <Header/>
      <h1>Main page</h1>
      <Link to={'/auth'}>AUTH</Link>

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
