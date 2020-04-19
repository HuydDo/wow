export const addCharacter = (character, playerId) => {
  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/players/${playerId}/characters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(character)
    })
    .then(response => response.json())
    .then(player => dispatch({type: 'ADD_CHARACTER', payload: player}))
  }
}