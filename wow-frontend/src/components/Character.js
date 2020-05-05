import React from 'react'
import {deleteCharacter} from '../actions/deleteCharacter'
import {connect} from 'react-redux'

const Character = (props) =>{
  
  const handleDelete = (character) => {
    props.deleteCharacter(character.id, character.player_id)
  }

  return(
   <div>
      <li key = {props.c.id} >
       <p> {props.c.name} - {props.c.gender} -
        {props.c.race} - {props.c.character_class} 
        <button onClick = {() => handleDelete(props.c)}>Delete</button>
       </p> 
      </li>
   </div> 
  )
}

export default connect(null, {deleteCharacter})(Character)