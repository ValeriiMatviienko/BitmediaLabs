import React from 'react';
import { Switch, Route } from 'react-router-dom';
import User from './User/User';
import Users from './Users/Users';
import './usersStatistics.scss';

export default function UsersStatistics() {
  return (
    <div className="users-statistics">
      <div className="users-statistics__header">
        <div className="container">
          <div className="users-statistics__logo-header">AppCo</div>
        </div>
      </div>
      <div className="users-statistics__content">
        <div className="container">
          <Switch>
            <Route exact path="/usersStatistics" component={Users} />
            <Route path="/usersStatistics/:id" component={User} />
          </Switch>
        </div>
      </div>
      <div className="users-statistics__footer">
        <div className="container">
          <div className="users-statistics__footer-content">
            <h3 className="users-statistics__logo-footer">AppCo</h3>
            <div className="users-statistics__themeTags">
              All rights reserved by ThemeTags
            </div>
            <div className="users-statistics__copyrights">
              Copyrights &#169; 2021.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
