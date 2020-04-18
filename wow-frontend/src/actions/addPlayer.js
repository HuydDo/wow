export const addPlayer = (data) => {

  return (dispatch) => {
   fetch('http://localhost:3000/api/v1/players', {
     header: {
       'Content-Type': 'application/json'
     },
     method: 'POST', 
     body: JSON.stringify(data)
   })
  }
}