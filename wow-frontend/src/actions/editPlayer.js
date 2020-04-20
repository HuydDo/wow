export const editPlayer = (data) => {
 
  return (dispatch) => {
   fetch(`http://localhost:3000/api/v1/players/${data.id}`, {
     headers: {
       'Content-Type': 'application/json', 
      //  'Accept': 'application/json'
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