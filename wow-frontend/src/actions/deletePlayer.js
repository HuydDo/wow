// const apiURL = 'http://localhost:3000'
const apiURL = process.env.REACT_APP_BASE_API_URL
export const deletePlayer = (playerId) =>{
  
  return(dispatch) => {
    fetch(`${apiURL}/api/v1/players/${playerId}`, {
    // fetch(`/api/v1/players/${playerId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(player => {
      if(player.error){
        alert(player.error)
      } else {
        dispatch({type: 'DELETE_PLAYER', payload: player})
      }
    })
  }
}