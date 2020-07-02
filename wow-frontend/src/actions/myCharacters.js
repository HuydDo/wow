const apiURL = 'http://localhost:3000'
//synchronous actions
export const setMyCharacters = characters =>{
  return {
   type: "SET_MY_CHARACTERS",
   characters
  }
}


//asynchronous actions
export const getMyCharacters = (playerId) =>{
 
    return dispatch => {
      return fetch(`${apiURL}/api/v1/players/${playerId}/characters`, {
      // return fetch(`/api/v1/players/${playerId}/characters`, {

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
            dispatch(setMyCharacters(response))
          }
        })
        .catch(console.log)
    }
  }
