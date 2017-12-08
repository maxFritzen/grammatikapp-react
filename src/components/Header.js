import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="nav">
    <div className="content-container">
      <div className="nav__menu">
        <NavLink to="/" activeClassName="is-active" exact={true} className="nav__link">Start</NavLink>
        <NavLink to="/practice" activeClassName="is-active" className="nav__link">Övning</NavLink>
        <NavLink to="/test" activeClassName="is-active" className="nav__link">Test</NavLink>
      </div>
    </div>
  </header>
);

export default Header;
