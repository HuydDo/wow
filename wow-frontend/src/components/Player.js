import React from 'react'

const Player = (props) => {
  console.log(props)

  let player = props.players[props.match.params.id - 1]
  console.log(player)
  
  return(
      <li>
        { player ? player.name : null}
      </li>
  )


}

export default Player