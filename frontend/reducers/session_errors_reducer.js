// will keep track of all the error messages 
//RECEIEVE_SESSION_ERRORS - > sets errors to the action's errors
//RECEIVE_CURRENT_USER --> clears the errors 

//listens to two types of actions here: 
import { RECEIEVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from "../actions/session_actions";
import sessionReducer from "./session_reducer";

 const sessionErrorReducer = (state = [], action) => {
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

export default sessionErrorReducer; 