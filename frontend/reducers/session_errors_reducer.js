// will keep track of all the error messages 
//RECEIEVE_SESSION_ERRORS - > sets errors to the action's errors
//RECEIVE_CURRENT_USER --> clears the errors 

import { RECEIEVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIEVE_SESSION_ERRORS:
            return action.errors; 
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }; 
}