const initialState = {
  username: "",
  password: ""
}
const login = (state = initialState, action) => {
  
  switch (action.type){
    case "UPDATE_LOGIN_FORM":
      return action.formData

    case "RESET_LOGIN_FORM":
      return initialState
      
   default:
     return state
  }
}

export default login;