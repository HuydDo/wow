import React from 'react'
import Character from './Character'

const Characters = (props) => {
  
  props.characters.sort((a, b) => {
    let nameA = a.name.toUpperCase()
    let nameB = b.name.toUpperCase()
    let genderA = a.gender.toUpperCase()
    let genderB = b.gender.toUpperCase()

  return ( (nameA > nameB) ? 1 : (nameA === nameB) ? ((genderA > genderB) ? 1 : -1) : -1 )
    
  })
  // console.log(props)

  return ( 
    <div>
      Characters.js component add inside div 2 line
      <p>{props.characters.length > 0 ? `You have ${props.characters.length} character(s)` : 'You have no character'}</p>
      <h3>{props.characters.length > 0 ? 'Characters' : null} </h3> 
      { props.characters && props.characters.map( c =>  <Character id={c.id} c={c} key={c.id}/>)}
    </div>
  )
}
export default Characters