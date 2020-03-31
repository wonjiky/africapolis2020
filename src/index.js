import React from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { i18nReducer } from './store/reducers';
import App from './App';
import thunk from 'redux-thunk';
import './index.css';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    i18n: i18nReducer,
});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = <Provider store={store}><App/></Provider>; 
render(app, document.getElementById('root'));

serviceWorker.unregister();
