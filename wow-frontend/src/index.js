import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import playerReducer from './reducers/playerReducer'
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
require('dotenv').config()
const reducer = combineReducers({
  playerReducer,
  currentUser,
  loginForm,
  signupForm
})

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root'))


