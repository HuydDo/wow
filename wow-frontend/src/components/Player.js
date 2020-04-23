import React from 'react'
import {
  Redirect
} from 'react-router-dom'
import CharactersContainer from '../containers/CharactersContainer'
// import PlayerEdit from './PlayerEdit'

import PlayerInput from './PlayerInput'

import {
  connect
} from 'react-redux'
import {
  deletePlayer
} from '../actions/deletePlayer'

class Player extends React.Component {

    constructor(props) {

      super(props)
      this.state = {
        showComponent: false,
        showComponent2: false
      }
    }

    // let player = props.players[props.match.params.id - 1]
    // let player = this.props.players.filter(player => player.id === parseInt(props.match.params.id))[0]

    handleDelete = (player) => {
      this.props.deletePlayer(player.id)
      this.setState({
        showComponent2: true
      })
    }

    handleEdit = () => {
      this.setState({
        showComponent: !this.state.showComponent
      })
    }

    render() {
      const player = this.props.players.filter(player => player.id === parseInt(this.props.match.params.id))[0]
      return ( 
        <div>
            <h3> {player ? 'Player Name' : null } </h3> {
            /* {player ? null :<Redirect to='/players'/>} */ } 
            <p> {player ? player.name : null } {' '} 
            { player && < button onClick = { () => this.handleDelete(player)} > Delete </button>} {
              player && < button onClick = { () => this.handleEdit(player)} > Edit </button>} 
            </p> {
                  /*player && <PlayerEdit player={player}/>*/ } {
                  /* {this.state.showComponent &&  player && <PlayerEdit player={player}/>} */ }

              {this.state.showComponent && player && < PlayerInput player = {player} type = "Edit" / > }

              {this.state.showComponent2 && player && < Redirect to = '/players' / >} 
              {player && < CharactersContainer player = {player} />}
         </div>
        )
       }
}

export default connect(null, {deletePlayer})(Player)