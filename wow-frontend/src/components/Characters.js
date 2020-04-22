import React from 'react'
import {connect} from 'react-redux'
import {deleteCharacter} from '../actions/deleteCharacter'

const Characters = (props) => {
  
  const handleDelete = (character) => {
    props.deleteCharacter(character.id, character.player_id)
  }

  return (
    <div>
      <h4>{props.characters.length !== 0 ? 'Characters' :null }</h4>
      {props.characters && props.characters.map(character => 
        <li key={character.id}>
          <p>{character.name} - {character.gender} - {character.race} - {character.character_class} {' '}
          <button onClick={() => handleDelete( character)}>Delete</button></p>
        </li>
      )}
    </div>
  )
}

export default connect(null, {deleteCharacter})(Characters)