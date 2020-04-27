import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import playerReducer from './reducers/playerReducer'
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'

require('dotenv').config()

const reducer = combineReducers({
  playerReducer, 
  currentUser,
  loginForm
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose
let store = createStore(playerReducer, 
  composeEnhancers (applyMiddleware(thunk)))

// const store = createStore(playerReducer, 
//   compose (applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

//  const store = createStore(reducer, 
//     compose (applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root'))


