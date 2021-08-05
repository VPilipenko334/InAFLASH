// keeps track of all our users 

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const userReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    // newState = Object.assign({}, state, { [action.user.id]: action.user })
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser });
        default:
            return oldState;
    }
};

export default userReducer;
