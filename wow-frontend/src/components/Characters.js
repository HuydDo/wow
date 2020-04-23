import React from 'react'
import {connect} from 'react-redux'
import {deleteCharacter} from '../actions/deleteCharacter'

const Characters = (props) => {
   props.characters.sort(function(a,b){
    let nameA = a.name.toUpperCase(); // ignore upper and lowercase
        let nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
  })

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