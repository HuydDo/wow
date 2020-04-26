import React from 'react'
import {Link} from 'react-router-dom'

const Players = (props) => {
console.log(props)
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

  return (
    <div>
      <h3>Players</h3>
      {props.players.map(player =>
        <li key={player.id} className="players">
          <Link to={`/players/${player.id}`}>{player.name}</Link> 
        </li> )}
    </div> 
  )
} 

export default Players