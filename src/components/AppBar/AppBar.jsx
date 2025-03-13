import React from 'react';
import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Log In</NavLink>
      </nav>
    </header>
  );
};

export default AppBar;
