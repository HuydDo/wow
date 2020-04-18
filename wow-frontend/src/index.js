import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import playerReducer from './reducers/playerReducer'
// import './index.css';
import App from './App';

// require('dotenv').config()

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_  || compose
// let store = createStore(playerReducer, 
//   composeEnhancers (applyMiddleware(thunk)))

const store = createStore(playerReducer, 
  compose (applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'))


