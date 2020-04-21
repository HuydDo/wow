import React from 'react'
// import {Redirect} from 'react-router-dom'
import CharactersContainer from '../containers/CharactersContainer'
import PlayerEdit from './PlayerEdit'
// import {editPlayer} from '../actions/editPlayer'
// import { connect } from 'react-redux'

// import {Route, Switch} from 'react-router-dom'
// const Player = (props) => {
class Player extends React.Component{

  constructor (props){
    super(props)
    this.state = {
      showComponent: false
    }
  }
  


  // let player = props.players[props.match.params.id - 1]
  // let player = this.props.players.filter(player => player.id === parseInt(props.match.params.id))[0]

  
//  handleDelete = (player) => {
//     this.props.deletePlayer(player)
//   }

  handleEdit = () => {
    this.setState({
      showComponent: !this.state.showComponent
    })
  }

  render(){
   const player = this.props.players.filter(player => player.id === parseInt(this.props.match.params.id))[0]
   return(
    <div>
      <h4>Player Name :</h4>
      {/* {player ? null :<Redirect to='/players'/>} */}
      <p>{player ? player.name : null}</p>
      {/* {player && <button onClick={() => handleDelete( player)}>Delete</button>} */}
      {player && <button onClick={() => this.handleEdit( player)}>Edit</button>}
      {player &&  <CharactersContainer player={player}/>}
      {/*player && <PlayerEdit player={player}/>*/}
      {this.state.showComponent &&  player && <PlayerEdit player={player}/> }
    </div>
   )}
}
export default Player
// export default connect(null, {deletePlayer})(Player)