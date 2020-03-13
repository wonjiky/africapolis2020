import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { importConfig } from './axios';
import Layout from './hoc/Layout/Layout';
import * as serviceWorker from './serviceWorker';

importConfig.get('config.json')
    .then(response => {
        setTimeout(
            () => {
                const config = response.data;
                const app = (
                        // <Provider store={store}>
                            <BrowserRouter basename="/">
                                <Layout disclaimer={config.Disclaimer} menuData={config.menu} >
                                    <App config={config} /> 
                                </Layout>
                            </BrowserRouter>
                        // </Provider> 
                    )
                ReactDOM.render(app, document.getElementById('root'));
            }, 1000
        )
    }).catch((err) => {
    console.log('failed to load static config :', err);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
