import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import NotFound from './NotFound';
import Home from './Home';
import Detail from './Detail';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/detail/:id/:ngay' component={ Detail } />
        <Route component={ NotFound } />
      </Switch>
    );
  }
}

export default withRouter(Router);