import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'
import { withRouter } from 'react-router-dom'
const Login = ({loginFormData, updateLoginForm, login,history}) => {

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
   history.push('/About')
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

const mapStateToProps = state => {
  return {
   loginFormData: state.loginForm
  }
}

export default withRouter(connect(mapStateToProps, {updateLoginForm, login})(Login))