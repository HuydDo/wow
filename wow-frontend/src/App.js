import React from 'react';
// import {connect} from 'react-redux'
import './App.css';
import PlayersContainer from './containers/PlayersContainer'
// import {fetchWow} from './actions/fetchWow'
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home';
class App extends React.Component {
    
  render(){
    return (
      <div className="App">
        <NavBar/>
        <hr/>
        <Route exact path="/" component={Home} />
        <PlayersContainer />
      </div>
    );
  }
}

// export default connect(null,{fetchWow})(App);
export default App;