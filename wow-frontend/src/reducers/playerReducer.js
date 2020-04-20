export default function playerReducer(state = {players: []}, action) {
//  debugger
  switch( action.type){
   
    case 'FETCH_PLAYERS':
      return {players: action.payload}
      
    case 'ADD_PLAYER':
      return {...state, players: [...state.players, action.payload] }
    
    case 'ADD_CHARACTER':
      let players = state.players.map(player => {
        if (player.id === action.payload.id) {
          return action.payload
        } else {
          return player
        }
      })
      return {...state, players: players}
      
    case 'DELETE_CHARACTER':
      let playersTwo = state.players.map(player => {
      if (player.id === action.payload.id) {
        return action.payload
      } else {
        return player
      }
    })
    return {...state, players: playersTwo}
    
    case 'EDIT_PLAYER':
      let playersThree = state.players.map(player => {
        if (player.id === action.payload.id) {
          return action.payload
        } else {
          return player
        }
      })
      return {...state, players: playersThree}
      
    default:
      return state

  }
    
}
