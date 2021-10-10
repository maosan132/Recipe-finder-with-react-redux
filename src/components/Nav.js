import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
// import logo from '../assets/logo.png';

const Nav = () => (
  <nav className={classes.nav}>
    <h2 className={classes.logo}>
      <Link to="/">{/* <img src={logo} alt={logo} /> */}</Link>
      Catalogue Of Recipes
    </h2>
    <ul className={classes.navLinks}>
      <NavLink
        className={classes.lists}
        activeStyle={{
          fontWeight: 'bold',
        }}
        to="/"
      >
        <li>Recipes</li>
      </NavLink>
      <NavLink
        className={classes.lists}
        activeStyle={{
          fontWeight: 'bold',
        }}
        to="/about"
      >
        <li>About Us</li>
      </NavLink>
    </ul>
  </nav>
);

export default Nav;
