import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchPlayers} from '../actions/fetchPlayers'
import Players from '../components/Players'
import Player from '../components/Player'
import PlayerInput from '../components/PlayerInput'

class PlayersContainer extends React.Component{

  componentDidMount(){
    this.props.fetchPlayers()
  }
  
  render(){
    return(
      <div>
        <Route path='/players/new' component={PlayerInput} />
        <Route path='/players/:id'   render={(routeProps) => <Player {...routeProps} players={this.props.players}/>} />
        <Route exact path='/players' render={(routeProps) => <Players {...routeProps} players={this.props.players}/>} />
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