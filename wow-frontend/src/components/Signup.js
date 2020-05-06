import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm'
import { signup } from '../actions/currentUser'

const Signup = ({signupFormData, updateSignupForm, signup}) => {
  // console.log(signupFormData)
  const handleChange = event => {
    const {name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

 const handleSubmit = event => {
   event.preventDefault()
   signup(signupFormData) 
 }

  return (
    <form onSubmit= {handleSubmit}>
      <input placeholder="name" value={signupFormData.name} name="name" 
      type="text" onChange={handleChange} />
      <input placeholder="username" value ={signupFormData.username} name="username"
      type="text" onChange={handleChange} />
      <input placeholder="password" value ={signupFormData.password} name="password" 
      type="password" onChange={handleChange} />
      <input type= "submit" value="Sign Up"/>
    </form>
  )

}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)