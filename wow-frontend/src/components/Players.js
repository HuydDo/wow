import React from 'react'
import {Link} from 'react-router-dom'

const Players = (props) => {
  
  return (
    <div>
      <h3>Players</h3>
      {props.players.map(player =>
        <li key={player.id} class="players">
          <Link to={`/players/${player.id}`}>{player.name}</Link> 
        </li> )}
    </div> 
  )
} 

export default Players