//synchronous actions
export const setMyCharacters = characters =>{
  return {
   type: "SET_MY_CHARACTERS",
   characters
  }
}


//asyns actions
export const getMyCharacters = (playerId) =>{
 
    return dispatch => {
      return fetch(`http://localhost:3000/api/v1/players/${playerId}/characters`, {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            // console.log(response)
            dispatch(setMyCharacters(response))
          }
        })
        .catch(console.log)
    }
  }
