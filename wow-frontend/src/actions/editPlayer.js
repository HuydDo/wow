// const apiURL = 'http://localhost:3000'
const apiURL = process.env.REACT_APP_BASE_API_URL
export const editPlayer = (data) => {
 
  return (dispatch) => {
   fetch(`${apiURL}/api/v1/players/${data.id}`, {
    // fetch(`/api/v1/players/${data.id}`, {
  
     headers: {
       'Content-Type': 'application/json'
     },
     method: 'PATCH', 
     body: JSON.stringify(data)
   })
   .then(response => response.json())
   .then(player => {
     if(player.error){
       alert(player.error)
     } else {
      dispatch({type: 'EDIT_PLAYER', payload: player})
     }
   })
  }
}