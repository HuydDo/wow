import React from 'react'
import CharacterInput from '../components/CharacterInput'
import Characters from '../components/Characters'

class CharacterContainer extends React.Component{

  render(){
    return(
      <div>
        <CharacterInput/>
        <Characters characters={this.props.player && this.props.player.characters}/>
      </div>
    )

  }
}

export default CharacterContainer