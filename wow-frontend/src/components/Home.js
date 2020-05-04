import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <h2>World of Warcraft App
      <span className="topright">
      <Link to="/signup">Sign Up</Link><span id="spanId"> or </span><Link to="/login">Log In</Link>
    </span></h2>
    </div>
  );
};

export default Home;
