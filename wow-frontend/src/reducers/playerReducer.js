export default function playerReducer(state = {players: []}, action) {

  let players = (state) => state.players.map(player => {
    if (player.id === action.payload.id) {
      return action.payload
    } else {
      return player
    }
  })

  switch( action.type){
   
    case 'FETCH_PLAYERS':
      return {players: action.payload}
      
    case 'ADD_PLAYER':
      return {...state, players: [...state.players, action.payload] }
    
    case 'ADD_CHARACTER':
      return {...state, players: players(state)}
      
    case 'DELETE_CHARACTER':
      return {...state, players: players(state)}

    case 'EDIT_PLAYER':
      return {...state, players: players(state)}

    case 'DELETE_PLAYER':
      const playersNew = state.players.filter(player => player.id !== action.payload.id )
      return {...state, players: playersNew}

    default:
      return state

  }
}
