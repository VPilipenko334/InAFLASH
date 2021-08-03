// combines multiple, domain specific reducers 

import { combineReducers } from "redux";

import entitiesReducer from "./entities_reducer";
import sessionErrorReducer from "./session_errors_reducer";
import sessionReducer from "./session_reducer";

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: sessionErrorReducer
})

export default rootReducer; 