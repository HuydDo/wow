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

  // action = () => {
  //   if (this.props.type === "Edit"){
  //     // return {editPlayer}
  //     return this.props.editPlayer
  //   } else {
  //     // return {addPlayer}
  //     return this.props.addPlayer
  //   }
  // }

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

// #1 Wrap into Dispatch Manually: can not pass this.state outside class
// const mapDispatchToProps = dispatch => ({
//    addPlayer: (this.state) => dispatch(addPlayer(this.state)),
//    editPlayer: (player) => dispatch(player)
// })
 
//#2 Wrap into Dispatch Automatically with Connect
const mapDispatchToProps  = {
   addPlayer ,
   editPlayer
}
 
export default connect(null,mapDispatchToProps)(PlayerInput) 

// export default connect(null,{addPlayer, editPlayer})(PlayerInput) 
