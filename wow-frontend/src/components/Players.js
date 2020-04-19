import React from 'react'
import {Link} from 'react-router-dom'
// import Player from './Player'

const Players = (props) => {

  return (
    <div>
      {props.players.map(player =>
        <li key={player.id}>
          <Link to={`/players/${player.id}`}>{player.name}</Link> 
         </li> )}
    </div>
  )

} 

export default Players