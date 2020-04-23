import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
       <li><NavLink to="/" exact>Home</NavLink></li>
       <li><NavLink to="/About" exact>About</NavLink></li>
       <li><NavLink to="/players" exact>Players</NavLink></li>
       <li><NavLink to="/players/new" exact>Create new player</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;
