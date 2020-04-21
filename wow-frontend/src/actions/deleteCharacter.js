export const deleteCharacter = (characterId, playerId) =>{

  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/players/${playerId}/characters/${characterId}`, {
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
