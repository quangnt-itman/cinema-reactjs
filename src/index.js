import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fancyapps/fancybox/dist/jquery.fancybox.css';


import 'jquery/dist/jquery';
// import './assets/js/jQuery';
import 'popper.js/dist/umd/popper';
import 'bootstrap/dist/js/bootstrap';
import 'slick-carousel/slick/slick';
// import '@fancyapps/fancybox/dist/jquery.fancybox';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './ReduxStore/reducers';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  composeEnhancers( applyMiddleware( thunk ) )
);


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById( 'root' )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
