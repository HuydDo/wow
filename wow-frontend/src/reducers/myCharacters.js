export default (state =[], action) => {

  switch(action.type){

    case "SET_MY_CHARACTERS":
      // console.log("action character", action.characters)
      return action.characters

    default:
      return state
  }

}