//keeps track of all the relational data in the app 
//this will combine the reducers that handle the relational data

import { combineReducers } from "redux";
import PicturesReducer from "./pictures_reducer";
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    pictures: PicturesReducer
});

export default entitiesReducer; 