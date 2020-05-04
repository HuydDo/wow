import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout'
import { connect } from 'react-redux'

const NavBar = ({currentUser, loggedIn}) => {
  return (
    <div>
      <ul className="topnav" >
       {/* <li className="navbar"><NavLink to="/" exact>Home</NavLink></li> */}
       <li className="navbar"><NavLink to="/About" exact>About</NavLink></li>
       <li className="navbar"><NavLink to="/players" exact>My Player</NavLink></li>
       {/* <li className="navbar"><NavLink to="/players/new" exact>Create new player</NavLink></li> */}
      </ul>
      { loggedIn ? <><p>Logged in as {currentUser.name}</p><Logout/></> : null}

    </div>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar)