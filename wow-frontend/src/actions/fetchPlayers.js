// const apiURL = 'http://localhost:3000'
const apiURL = process.env.REACT_APP_BASE_API_URL
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
