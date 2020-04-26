import React from 'react';
import {connect} from 'react-redux'
import {fetchWow} from './actions/fetchWow'

import './App.css';
import PlayersContainer from './containers/PlayersContainer'

import { Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About';

// import {fetchPlayers} from './actions/fetchPlayers'
class App extends React.Component {
  
  // componentDidMount(){
  //   this.props.fetchPlayers()
  // }

  render(){
    return (
      <div className="App">
        <NavBar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <PlayersContainer />
      </div>
    );
  }
}
// export default connect(null,{fetchWow, fetchPlayers})(App);
export default connect(null,{fetchWow})(App);
// export default App