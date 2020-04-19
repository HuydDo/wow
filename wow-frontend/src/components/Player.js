import React from 'react'
import {Redirect} from 'react-router-dom'
import CharactersContainer from '../containers/CharactersContainer'

const Player = (props) => {
  // console.log(props)

  let player = props.players[props.match.params.id - 1]
  console.log(player)
  
  return(
    <div>
      <h4>
        {/* {player ? null :<Redirect to='/players'/>} */}
        {player ? player.name : null}
      </h4>  
      <CharactersContainer player={player}/>
    </div>
  )
}

export default Player