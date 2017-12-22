import React, { Component } from 'react';
import Nav from './Nav';
import Router from './Router';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Router />
      </div>
    );
  }
}

export default App;