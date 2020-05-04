import { resetLoginForm } from './loginForm'
import { resetSignupForm } from './signupForm'
import { getMyCharacters } from './myCharacters'

//synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

// asynchronous action creators
export const login = credentials => {
  console.log('credentials are', credentials)
  return dispatch => {
      return fetch("http://localhost:3000/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    .then(r => r.json())
    .then(response => {
      if (response.error){
        alert(response.error)
      } else {
        dispatch(setCurrentUser(response))
        // console.log(response)
        dispatch(resetLoginForm())
      }
    }
    )
      .catch(console.log)
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch("http://localhost:3000/api/v1/logout", {
      credentials: "include",
      method: "DELETE"
    })
  }
}

// asynchronous action creators
export const signup = credentials => {
  console.log('credentials are', credentials)
  return dispatch => {
      const playerInfo ={
        player: credentials
      }
      return fetch("http://localhost:3000/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(playerInfo)
    })
    .then(r => r.json())
    .then(response => {
      if (response.error){
        alert(response.error)
      } else {
        dispatch(setCurrentUser(response))
        // console.log(response)
        dispatch(resetSignupForm())
      }
    }
    )
      .catch(console.log)
  }
}

export const getCurrentUser = () => {
  console.log('Dispatching get current user')
  return dispatch => {
      return fetch(`http://localhost:3000/api/v1/get_current_user`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(r => r.json())
    .then(response => {
      if (response.error){
        alert(response.error)
      } else {
        console.log("current user:", response)
        dispatch(setCurrentUser(response))
        dispatch(getMyCharacters(response.id))

      }
    }
    )
      .catch(console.log)
  }
}

