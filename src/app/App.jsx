import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FlightList from './pages/flight-list';
import Login from './pages/login';

const App = ({ isLogged }) => {
  console.log(isLogged);
  return (
    <Router>
      <div>
        <Switch>
          {!isLogged ? (
            <Route exact path="/" component={Login} />
          ) : (
            <Route path="/" component={FlightList} />
          )}
        </Switch>
      </div>
    </Router>
  );
};

export default connect((state) => {
  console.log(state);
  return { isLogged: state.user.isLogged };
}, null)(App);
