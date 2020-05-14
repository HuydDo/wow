import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import PlayersContainer from './containers/PlayersContainer'
import { Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About';
import { getCurrentUser } from './actions/currentUser'
import Login from './components/Login'
import Signup from './components/Signup'
class App extends React.Component {
  
  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn } = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBar/> : <Home/> }
        <Switch>
          <Route exact path="/About" component={About} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
        </Switch>
        <PlayersContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}
export default connect(mapStateToProps, {getCurrentUser})(App)