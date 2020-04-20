import React from 'react'
// import {Redirect} from 'react-router-dom'
import CharactersContainer from '../containers/CharactersContainer'
import PlayerEdit from './PlayerEdit'

const Player = (props) => {
  // console.log(props)

  // let player = props.players[props.match.params.id - 1]
  let player = props.players.filter(player => player.id === parseInt(props.match.params.id))[0]
  // console.log(player)
  
  return(
    <div>
      <h4>Player Name</h4>
      <p>
        {/* {player ? null :<Redirect to='/players'/>} */}
        {player ? player.name : null}
      </p> 
      <CharactersContainer player={player}/><br/>
      <h4>Update Player:</h4>
      <PlayerEdit player={player}/>
    </div>
  )
}

export default Player