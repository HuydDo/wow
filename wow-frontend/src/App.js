import React from 'react';
import {connect} from 'react-redux'
// import './App.css';
import PlayersContainer from './containers/PlayersContainer'
// import {fetchWow} from './actions/fetchWow'



class App extends React.Component {


  componentDidMount(){
    // this.props.fetchWow()
    
  }
    
  render(){
    return (
      <div className="App">
        <h3>World of Warcraft App</h3>
        <PlayersContainer />
      </div>
    );
  }
}

// export default connect(null,{fetchWow})(App);
export default App;