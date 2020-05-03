import React from 'react'
import {connect} from 'react-redux'
import {deleteCharacter} from '../actions/deleteCharacter'

const MyCharacters = props => {
  
  props.characters.sort((a, b) => {
    let nameA = a.name.toUpperCase()
    let nameB = b.name.toUpperCase()
    let genderA = a.gender.toUpperCase()
    let genderB = b.gender.toUpperCase()

  return ( (nameA > nameB) ? 1 : (nameA === nameB) ? ((genderA > genderB) ? 1 : -1) : -1 )
  
  })

  const handleDelete = (character) => {
    props.deleteCharacter(character.id, character.player_id)
  }

  return ( 
    <div>
      <h3>{props.characters.length > 0 ? 'Characters' : null} </h3> {
      props.characters && props.characters.map(character =>
        <li key = {character.id} >
        <p> {character.name} - {character.gender} - {character.race} - {character.character_class} {' '} 
        <button onClick = {() => handleDelete(character)}>Delete</button></p >
        </li>
      )} 
    </div>
  )
}

const mapStateToProps = state => {
  return ({
    characters: state.myCharacters
  })
}

export default connect(mapStateToProps, {deleteCharacter})(MyCharacters)