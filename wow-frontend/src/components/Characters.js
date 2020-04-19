import React from 'react'

// function Characters(props) {
const Characters = (props) => {
  return (
    <div>
      {props.characters && props.characters.map(character => 
        <li key={character.id}>
          {character.name} - {character.gender} - {character.race} - {character.character_class}
        </li>
      )}
    </div>
  )
}

export default Characters