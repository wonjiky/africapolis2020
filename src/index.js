import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

// importConfig.get('config.json')
//     .then(response => {
//         setTimeout(
//             () => {
//                 const config = response.data;
//                 const app = (
//                         // <Provider store={store}>
//                             <BrowserRouter basename="/">
//                                     <App config={config} /> 
//                             </BrowserRouter>
//                         // </Provider> 
//                     )
//                 ReactDOM.render(app, document.getElementById('root'));
//             }, 1000
//         )
//     }).catch((err) => {
//     console.log('failed to load static config :', err);
// });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const rootReducer = combineReducers({
// });
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// const app = <Provider store={store}><App/></Provider>; 
const app = <App/>; 
render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
