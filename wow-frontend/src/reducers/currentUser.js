export default (state = null, action) => {
  // console.log("action in currentUser Reducer " + action.user)
  switch (action.type){
    case "SET_CURRENT_USER":
      return action.user

    case 'CLEAR_CURRENT_USER':
      return null

   default:
     return state
  }
}