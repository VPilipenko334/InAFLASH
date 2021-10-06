// keeps track of all our users 

import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    // let nextState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_USER:
            return Object.assign({}, oldState, { [action.user.id]: action.user });

        case RECEIVE_USERS:
            return Object.assign({}, oldState, action.users);

        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
        default:
            return oldState;
    }
}

export default usersReducer;
