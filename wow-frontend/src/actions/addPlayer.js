// const apiURL = 'http://localhost:3000'
const apiURL = process.env.REACT_APP_BASE_API_URL
export const addPlayer = (data) => {
  return (dispatch) => {
   fetch(`${apiURL}/api/v1/players`, {
  //  fetch(`/api/v1/players`, {
     headers: {
       'Content-Type': 'application/json'
     },
     method: 'POST', 
     body: JSON.stringify(data)
   })
   .then(response => response.json())
   .then(player => {
     if(player.error){
       alert(player.error)
     } else {
      dispatch({type: 'ADD_PLAYER', payload: player})
     }
   })
  }
}