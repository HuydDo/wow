import React from 'react'
import CharactersContainer from '../containers/CharactersContainer'
import PlayerInput from './PlayerInput'
import {connect} from 'react-redux'
import {deletePlayer} from '../actions/deletePlayer'
class Player extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        showPlayerInput: false,
      }
    }

    handleDelete = (player) => {
      this.props.deletePlayer(player.id)
      this.setState({
        showPlayers: true
      })
    }

    handleEdit = () => {
      this.setState({
        showPlayerInput: !this.state.showPlayerInput
      })
    }
     
    render() {
      
      const player = this.props.players.filter(player => player.id === parseInt(this.props.match.params.id))[0]
      return ( 
      <div>
          {player ? <h3>Player Name</h3> : null }
          <p> {player ? player.name : null } {' '} 
           { player && < button onClick = { () => this.handleDelete(player)} > Delete </button>} 
           { player && < button onClick = { this.handleEdit } > Edit </button>} 
          </p> 
          {this.state.showPlayerInput && player && <PlayerInput player={player} type ="Edit" />}
          {player && <CharactersContainer player = {player} />}
       </div>
      )
    }
}

export default connect(null, {deletePlayer})(Player)