// functional component 
// takes in store as a prop and renders routes wrapped by Provider
// where the React router will go 
// the <App /> will render all routes in the app, we will define routes within app 

import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);

export default Root;
