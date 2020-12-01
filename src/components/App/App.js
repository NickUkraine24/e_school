import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage';

const App = () => {
  return (
    <Router>
      <div>Header</div>
      <h1>Main page</h1>
      <Link to={'/auth'}>AUTH</Link>

      <Switch>
        <Route path="/auth">
          <AuthPage />
        </Route>
      </Switch>

      <div>Footer</div>
    </Router>
  );
};

export default App;
