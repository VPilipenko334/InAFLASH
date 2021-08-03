//keeps track of all the relational data in the app 
//this will combine the reducers that handle the relational data

import { combineReducers } from "redux";
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer
});

export default entitiesReducer; 