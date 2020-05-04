import React from 'react';
import { NavLink } from 'react-router-dom';
// import Login from './Login'
import Logout from './Logout'
import { connect } from 'react-redux'

const NavBar = ({currentUser, loggedIn}) => {
  return (
    <div>
      <ul className="topnav" >
       {/* <li className="navbar"><NavLink to="/" exact>Home</NavLink></li> */}
       <li className="navbar"><NavLink to="/About" exact>About</NavLink></li>
       <li className="navbar"><NavLink to="/players" exact>Player</NavLink></li>
       {/* <li className="navbar"><NavLink to="/players/new" exact>Create new player</NavLink></li> */}
       { loggedIn ? <><p>Logged in as {currentUser.name}</p><Logout/></> : null}
       {/* {currentUser ? <h3>Welcome, {currentUser.name}</h3> : ""} 

       <button>Login</button>
       <button>Sign Up</button> */}

       {/* {currentUser ? <Logout/> : <Login/>}  */}
      </ul>
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