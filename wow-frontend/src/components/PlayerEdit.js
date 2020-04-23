// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {editPlayer} from '../actions/editPlayer'

// class PlayerEdit extends Component{

//   state = {
//     name: ''
//   }

//   handleChange = (event) =>{
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }

//   handleSubmit = (event) => {
//     event.preventDefault()
//     let player = {...this.state, id: this.props.player.id} 
//     this.props.editPlayer(player)
//     this.setState({
//       name: ''
//     })
//   }

//   render(){
//     return(
//       <div>
//         <h3>Edit Player</h3>
//         <form onSubmit={this.handleSubmit}>
//           <label>Player Name:</label>
//           <input type='text' placeholder='Name' value={this.state.name}
//           name="name" onChange={this.handleChange}/>
//           <input type='submit'/>
//         </form>
//       </div>
//     )
//   }
// }

// export default connect(null, {editPlayer})(PlayerEdit)