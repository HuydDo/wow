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
  let currPlayers = (this.props.players.length >0 && this.props.currentUser) ? 
    this.props.players.filter(player => player.id === this.props.currentUser.id) : ""

  return (
    <div>
      <h3>{this.props.currentUser  ? 'Player Name' : null}</h3>
      { currPlayers && currPlayers.map(player =>
        <li key={player.id} className="players">
          <Link to={`/players/${player.id}`}>{player.name}</Link> 
        </li> )}
    </div> 
  ) 
 } 
}

const mapStateToProps = (state) => {
    return ({
      currentUser: state.currentUser,
      players: state.playerReducer.players,
    })
}

export default connect(mapStateToProps, {fetchPlayers})(Players)