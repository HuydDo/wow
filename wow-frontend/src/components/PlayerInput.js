import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addPlayer} from '../actions/addPlayer'

import {editPlayer} from '../actions/editPlayer'


class PlayerInput extends Component{

  // state = {
  //   name: ''
  // }
  // 
  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.props.type === "Edit") {
      let player = {...this.state, id: this.props.player.id} 
      this.props.editPlayer(player)
    } else {
      this.props.addPlayer(this.state)
    }

    this.setState({
      name: ''
    })
  }

  action = () => {
    if (this.props.type === "Edit"){
      return {editPlayer}
      // this.props.editPlayer
    } else {
      return {addPlayer}
      // this.props.addPlayer
    }
  }

  render(){
    return(
      <div>
        <h4>{this.props.type === "Edit"? 'Edit player' : 'Create new player'}</h4>
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

// const mapDispatchToProps = dispatch => {
  

//   return {props: dispatch.props}

// }

export default connect(null,{addPlayer, editPlayer}
  )(PlayerInput) 
