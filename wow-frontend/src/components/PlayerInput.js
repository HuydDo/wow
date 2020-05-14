import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addPlayer} from '../actions/addPlayer'
import {editPlayer} from '../actions/editPlayer'
import {Redirect} from 'react-router-dom'

class PlayerInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      showComponent: false
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    
    event.preventDefault()
    if (this.props.type === "Edit") {
      let player = {
        ...this.state,
        id: this.props.player.id
      }
      this.props.editPlayer(player)
    } else {
      this.props.addPlayer(this.state)
    }

    this.setState({
      name: '',
      showComponent: true
    })
  }

  render() {
    return ( 
      <div>
        <h3> {this.props.type === "Edit" ? 'Edit player' : ''}</h3> 
        <form onSubmit = {this.handleSubmit}>
        <label> Player Name:</label> 
        <input type = 'text' placeholder = 'name' value = {this.state.name}
        name = "name" onChange = {this.handleChange}/><br/>
        <input type = 'submit' />
        </form>
        {this.props.type !== "Edit" && this.state.showComponent && <Redirect to = '/players' />} 
      </div>
    )
  }
}

export default connect(null, {addPlayer, editPlayer})(PlayerInput)