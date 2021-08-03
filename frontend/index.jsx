import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.js';
import logger from 'redux-logger';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    ReactDOM.render(<h1>Welcome to InAFlash!</h1>, root);
})


