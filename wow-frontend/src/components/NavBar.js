import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './Login'
import Logout from './Logout'
import { connect } from 'react-redux'

const NavBar = ({currentUser}) => {
  return (
    <div>
      <ul className="topnav" >
       <li className="navbar"><NavLink to="/" exact>Home</NavLink></li>
       <li className="navbar"><NavLink to="/About" exact>About</NavLink></li>
       <li className="navbar"><NavLink to="/players" exact>Players</NavLink></li>
       {/* <li className="navbar"><NavLink to="/players/:id" exact>Player</NavLink></li> */}
       <li className="navbar"><NavLink to="/players/new" exact>Create new player</NavLink></li>
       
       {currentUser ? <h3>Welcome, {currentUser.name}</h3> : ""} 
       {currentUser ? <Logout/> : <Login/>} 
      </ul>
    </div>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)