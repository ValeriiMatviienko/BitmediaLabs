import React from 'react';
import Main from './components/Main/Main';
import UsersStatistics from './components/UserStatistics/UserStatistics';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/usersStatistics" component={UsersStatistics} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
