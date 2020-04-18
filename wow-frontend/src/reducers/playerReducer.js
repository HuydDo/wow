export default function playerReducer(state = {players: []}, action) {
//  debugger
  switch( action.type){
   
    case 'FETCH_PLAYERS':
      return {players: action.payload}

    default:
      return state

  }
    
}
