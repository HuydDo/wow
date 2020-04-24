import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul className="topnav" >
       <li className="navbar"><NavLink to="/" exact>Home</NavLink></li>
       <li className="navbar"><NavLink to="/About" exact>About</NavLink></li>
       <li className="navbar"><NavLink to="/players" exact>Players</NavLink></li>
       <li className="navbar"><NavLink to="/players/new" exact>Create new player</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;
