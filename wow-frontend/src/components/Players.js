import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchPlayers} from '../actions/fetchPlayers'

class Players extends React.Component{  
  
  componentDidMount(){
    this.props.fetchPlayers()
  }

  render(){
  this.props.players.sort(function(a,b){
    let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    //names must be equal
    return 0;
  })

  const { players , currentUser, loggedIn} = this.props
  
  let currPlayer = (players.length > 0 && currentUser) ? 
    players.filter(player => player.id === currentUser.id) : ""

  let player = (players.length > 0 && currentUser && currentUser.username === "admin") ? 
    players : currPlayer 
  
  return (
    <div>
      { loggedIn && currentUser.username === "admin" ? <p>admin access</p> : null}
      {this.props.currentUser ? <h3>Player Name</h3> : null}
      { player && player.map(player =>
        <li key={player.id} className="players">
          <Link to={`/players/${player.id}`}>{player.name}</Link> 
        </li> 
      )}
    </div> 
  ) 
 } 
}

const mapStateToProps = (state) => {
    return {
      currentUser: state.currentUser,
      players: state.playerReducer.players,
      loggedIn: !!state.currentUser
    }
}

export default connect(mapStateToProps, {fetchPlayers})(Players)