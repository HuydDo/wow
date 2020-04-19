import React, { Component } from 'react'
import {connect} from 'react-redux'

class CharacterInput extends Component {
  
  state = {

  }
  render() {
    
    return (
      <div>
        <form>
          <label>Name:</label>
          <input type="text"/><br/>
          
          <label>Gender:</label>
          <select>{this.props.gender.map((x,y) => <option key={y}>{x}</option>)}</select><br/>
         
          <label>Race:</label>
          <select>{this.props.races.map((x,y) => <option key={y}>{x}</option>)}</select><br/>
         
          <label>Class:</label>
          <select>{this.props.classes.map((x,y) => <option key={y}>{x}</option>)}</select><br/><br/>
          
        </form>
      </div>
    )
  }
}


export default connect(null )(CharacterInput)