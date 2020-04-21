export const deletePlayer = (playerId) =>{
  
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/players/${playerId}`, {
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