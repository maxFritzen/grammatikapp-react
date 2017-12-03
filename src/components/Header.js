import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home Page</NavLink>
    <NavLink to="/practice" activeClassName="is-active">Practice Page</NavLink>
    <NavLink to="/test" activeClassName="is-active">Test Page</NavLink>
  </div>
);

export default Header;
