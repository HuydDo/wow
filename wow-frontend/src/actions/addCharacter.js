const apiURL = 'http://localhost:3000'
export const addCharacter = (character, playerId) => {
  
  return(dispatch) => {
    // fetch(`http://localhost:3000/api/v1/players/${playerId}/characters`, {
    fetch(`${apiURL}/api/v1/players/${playerId}/characters`, {
    // fetch(`/api/v1/players/${playerId}/characters`, {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(character)
    })
    .then(response => response.json())
    .then(player => {
      if(player.error){
        alert(player.error)
      } else {
        dispatch({type: 'ADD_CHARACTER', payload: player})
      }
    })
  }
}