import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addPlayer} from '../actions/addPlayer'

class PlayerInput extends Component{

  state = {
    name: ''
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addPlayer(this.state)
    this.setState({
      name: ''
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Player Name:</label>
          <input type='text' placeholder='Name' value={this.state.name}
          name="name" onChange={this.handleChange}/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}


export default connect(null, {addPlayer})(PlayerInput)