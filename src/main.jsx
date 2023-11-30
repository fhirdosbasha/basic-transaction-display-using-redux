/**
 * combineReducers() is a function in redux. It is used to combine two or more reduceres.
 * 
 * It takes one object{keys: reducerFunctions} as input and return one function similar to reducer functions
 * The returned function can be called using dispatch() method
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
