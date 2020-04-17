import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';

let reducer =''


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE_  || compose
let store = createStore(reducer, 
  composeEnhancers (applyMiddleware(thunk)))

// const store = createStore(catsReducer, 
//   compose (applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))


