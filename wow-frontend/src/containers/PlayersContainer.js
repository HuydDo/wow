import React from 'react'
import {connect} from 'react-redux'

import {fetchPlayers} from '../actions/fetchPlayers'
import Players from '../components/Players'
import PlayerInput from '../components/PlayerInput'

class PlayersContainer extends React.Component{

  componentDidMount(){
    this.props.fetchPlayers()
  }
  
  render(){
    return(
      <div>
        <PlayerInput/><br/><br/>
        <Players players={this.props.players}/> 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    players: state.players
  })
}
export default connect(mapStateToProps, {fetchPlayers})(PlayersContainer)