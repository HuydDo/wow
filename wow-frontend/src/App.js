import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import {fetchPlayers} from './actions/fetchPlayers'
// import {fetchWow} from './actions/fetchWow'


class App extends React.Component {


  componentDidMount(){
    // this.props.fetchWow()
    this.props.fetchPlayers({type: 'FETCH_PLAYERS', payload: {name: 'Panda'}})
  }
    
  render(){
    return (
      <div className="App">
        <h3>World of Warcraft</h3>
        {/* {this.props.w} */}
      </div>
    );
  }
}



// export default connect(null,{fetchWow})(App);
export default connect(null,{fetchPlayers})(App);