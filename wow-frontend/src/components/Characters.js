import React from 'react'
// import {connect} from 'react-redux'
// import {deleteCharacter} from '../actions/deleteCharacter'
import Character from './Character'

const Characters = (props) => {
  
  // props.characters.sort((a,b) => (a.name > b.name) ? 1 : -1)
  // props.characters.sort((a, b) => (a.name > b.name) ? 1 : (a.name === b.name) ? ((a.gender > b.gender) ? 1 : -1) : -1 )
 

  props.characters.sort((a, b) => {
    let nameA = a.name.toUpperCase()
    let nameB = b.name.toUpperCase()
    let genderA = a.gender.toUpperCase()
    let genderB = b.gender.toUpperCase()

  return ( (nameA > nameB) ? 1 : (nameA === nameB) ? ((genderA > genderB) ? 1 : -1) : -1 )
    // if (nameA < nameB) {
    //   return -1;
    // }
    // if (nameA > ameB) {
    //   return 1
    // }
    // if (nameA === nameB){
    //   if (genderA > genderB){
    //     return 1
    //   }
    //   if (genderA < genderB){
    //     return -1
    //   }
    // } 
    // return 0;
  })

  // const handleDelete = (character) => {
  //   props.deleteCharacter(character.id, character.player_id)
  // }

  return ( 
    <div>
      <h3>{props.characters.length !== 0 ? 'Characters' : null} </h3> 
      {
      // props.characters && props.characters.map(character => 
        // <li key = {character.id} >
        // <p> {character.name} - {character.gender} - {character.race} - {character.character_class} {' '} 
        // <button onClick = {() => handleDelete(character)}>Delete</button></p >
        // </li>
        // )} 
        props.characters && props.characters.map( c => <Character id={c.id} c={c}/>)
      }
    </div>
  )
}
export default Characters
// export default connect(null, {deleteCharacter})(Characters)