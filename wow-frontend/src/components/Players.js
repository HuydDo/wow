import React from 'react'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'



const Players = (props) => {

  props.players.sort(function(a,b){
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

    let currPlayers = (props.players.length >0 && props.currentUser) ? 
      props.players.filter(player => player.id === props.currentUser.id) : ""
  
    return (
    <div>
      <h3>{props.currentUser  ? 'Player' : null}</h3>
      { currPlayers && currPlayers.map(player =>
        <li key={player.id} className="players">
          {/* <p>{props.playerId ? props.playerId : ""}</p> */}
          <Link to={`/players/${player.id}`}>{player.name}</Link> 
        </li> )}
    </div> 
  )
} 



const mapStateToProps = (state) => {
    return {
      currentUser: state.currentUser,
      players: state.playerReducer.players
    }
}
// export default Players

export default connect(mapStateToProps)(Players)