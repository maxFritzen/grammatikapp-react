import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__menu">
        <NavLink to="/" activeClassName="is-active" exact={true} className="header__link">Start</NavLink>
        <NavLink to="/practice" activeClassName="is-active" className="header__link">Övning</NavLink>
        <NavLink to="/test" activeClassName="is-active" className="header__link">Test</NavLink>
      </div>
    </div>
  </header>
);

export default Header;
