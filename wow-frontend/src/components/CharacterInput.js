import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addCharacter} from '../actions/addCharacter'
class CharacterInput extends Component {
  
  state = {
    name: '',
    gender: 'Male',
    race: 'Human',
    character_class: 'Warrior'
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addCharacter(this.state, this.props.player.id)
    this.setState({
      name: '',
      gender: 'Male',
      race: 'Human',
      character_class: 'Warrior'
    })
  }
  render() {
    
    return (
      <div>
        <h4>Create character</h4>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/>
          
          <label>Gender:</label>
          <select name="gender" value={this.state.gender} onChange={this.handleChange}>
            {this.props.gender.map((x,y) => <option key={y}>{x}</option>)}
          </select><br/>
         
          <label>Race:</label>
          <select name="race" value={this.state.race} onChange={this.handleChange}>
            {this.props.races.map((x,y) => <option key={y}>{x}
          </option>)}</select><br/>
         
          <label>Class:</label>
          <select name="character_class" value={this.state.character_class} onChange={this.handleChange}>
            {this.props.classes.map((x,y) => <option key={y}>{x}</option>)}
          </select><br/>
          <input type="submit"/><br/><br/>
          
        </form>
      </div>
    )
  }
}

export default connect(null, {addCharacter})(CharacterInput)