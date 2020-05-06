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
    
    // return ((nameA>nameB) ? 1 : -1)
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
  console.log("current user", currentUser)
  
  // let currPlayer = (this.props.players.length > 0 && this.props.currentUser) ? 
  //   this.props.players.filter(player => player.id === this.props.currentUser.id) : ""

  let currPlayer = (players.length > 0 && currentUser) ? 
    players.filter(player => player.id === currentUser.id) : ""

  let player = (players.length > 0 && currentUser && currentUser.username === "admin") ? 
    players : currPlayer 
  // console.log("Player(s):", player)
  
  return (
    <div>
      {/* { loggedIn ? <p>Your username: {currentUser.username} </p> :<p>no one is logged in</p>}  */}
      {/* { loggedIn && currentUser.username=== "admin" ? <p>admin access</p> : <p>regular access</p>} */}
      <h3>{this.props.currentUser  ? 'Player Name' : null}</h3>
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
    return ({
      currentUser: state.currentUser,
      players: state.playerReducer.players,
      loggedIn: !!state.currentUser
    })
}

export default connect(mapStateToProps, {fetchPlayers})(Players)