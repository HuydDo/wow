import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'

const Login = ({loginFormData, updateLoginForm, login}) => {

  const handleChange = event => {
    const {name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

 const handleSubmit = event => {
   event.preventDefault()
   login(loginFormData) 
 }

  return (
    <form onSubmit= {handleSubmit}>
      <input placeholder="username" value ={loginFormData.username} name="username"
      type="text" onChange={handleChange} />
      <input placeholder="password" value ={loginFormData.password} name="password" 
      type="password" onChange={handleChange} />
      <input type= "submit" value="Log In"/>
    </form>
  )

}

//this give mes an argument coming to this component
//that looks like:
// username: "test"
// password: "password"
const mapStateToProps = state => {
  return {
   loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, {updateLoginForm, login})(Login)