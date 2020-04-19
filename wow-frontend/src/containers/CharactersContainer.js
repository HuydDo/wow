import React from 'react'
import CharacterInput from '../components/CharacterInput'
import Characters from '../components/Characters'


const gender = ["Male","Female"]
const races = ["Human", "Orc", "Dwarf", "Night Elf", "Undead", "Tauren", "Gnome", "Troll", "Goblin", "Blood Elf", "Draenei", "Worgen", "Pandaren", "Nightborne", "Highmountain Tauren", "Void Elf", "Lightforged Draenei", "Zandalari Troll", "Kul Tiran", "Dark Iron Dwarf", "Vulpera", "Mag'har Orc", "Mechagnome"]
const classes = ["Warrior", "Paladin", "Hunter", "Rogue", "Priest", "Death Knight", "Shaman", "Mage", "Warlock", "Monk", "Druid", "Demon Hunter"]

class CharacterContainer extends React.Component{

  render(){
    return(
      <div>
        <CharacterInput gender={gender} races={races} classes={classes}/>
        <Characters characters={this.props.player && this.props.player.characters}/>
      </div>
    )

  }
}

export default CharacterContainer