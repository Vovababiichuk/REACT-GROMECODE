import React from 'react';
import User from './User';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <div className="page__content">
              <h1>Users</h1>
              <ul className="navigation">
                <li className="navigation__item">
                  <Link to="/users/github">Github</Link>
                </li>
                <li className="navigation__item">
                  <Link to="/users/facebook">Facebook</Link>
                </li>
              </ul>
              <span>Select a user please</span>
            </div>
          </Route>
          <Route path="/users/:userId">
            <User />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
