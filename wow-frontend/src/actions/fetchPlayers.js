const apiURL = 'http://localhost:3000'
export function fetchPlayers() {
  return (dispatch) => {
  fetch(`${apiURL}/api/v1/players`)
  // fetch(`/api/v1/players`)

  .then(resp => resp.json())
  .then(players => dispatch({
    type: 'FETCH_PLAYERS', payload: players
  }))
 }
}
