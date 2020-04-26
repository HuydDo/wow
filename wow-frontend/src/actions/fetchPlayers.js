export function fetchPlayers() {
//  debugger
  return (dispatch) => {
  fetch('http://localhost:3000/api/v1/players')
  .then(resp => resp.json())
  .then(players => dispatch({
    type: 'FETCH_PLAYERS', payload: players
  }))
 }
}
