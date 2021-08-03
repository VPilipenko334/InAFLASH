import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/Root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {

        let oldState;
        oldState = {
            session: { currentUser: window.currentUser, loggedIn: true },
        };
        store = configureStore(oldState);
        delete window.currentUser;
    } else {
        store = configureStore()
    }

    // window.store = store

    ReactDOM.render(<h1>Welcome to InAFlash!</h1>, root);
    //<Root store={store} />
});