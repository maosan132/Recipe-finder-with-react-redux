import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Nav.module.css';
// import logo from '../assets/logo.png';

const Nav = () => (
  <nav className={classes.nav}>
    <h2 className={classes.logo}>
      <Link to="/">
        {/* <img src={logo} alt={logo} /> */}
      </Link>
      Catalogue Of Recipes
    </h2>
    <ul className={classes.navLinks}>
      <Link className={classes.lists} to="/">
        <li>Recipes</li>
      </Link>
      <Link className={classes.lists} to="/about">
        <li>About Us</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
