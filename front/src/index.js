import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {  Provider  } from "react-redux";
import store from "./store/index";
import axios from "axios";

axios.defaults.baseURL = "http://front-test-api.herokuapp.com/api"

createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
