// const apiURL = 'http://localhost:3000'
const apiURL = process.env.REACT_APP_BASE_API_URL
export const deleteCharacter = (characterId, playerId) =>{

  return(dispatch) => {
    fetch(`${apiURL}/api/v1/players/${playerId}/characters/${characterId}`, {
      // fetch(`/api/v1/players/${playerId}/characters/${characterId}`, {  
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(player => {
      if(player.error){
        alert(player.error)
      } else {
        dispatch({type: 'DELETE_CHARACTER', payload: player})
      }
    })
  }
}
