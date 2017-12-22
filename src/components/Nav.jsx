import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/" > Home </NavLink>
        </nav>
      </div>
    );
  }
}

export default Nav;