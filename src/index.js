import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'element-theme-default';
import {createStore,combineReducers,applyMiddleware} from 'redux'
import StudentReducer from "./redux/student/reducer";
import thunkMiddleware  from "redux-thunk";
import { Provider } from 'react-redux';


//addReducer to store
const mainReducer = combineReducers({
  studentStore:StudentReducer,
})
const store = createStore(mainReducer,applyMiddleware(thunkMiddleware))

ReactDOM.render(
  //add store to provider
  <Provider store = {store}>
     <App />
  </Provider>
   ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
