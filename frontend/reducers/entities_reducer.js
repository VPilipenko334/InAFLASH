import { combineReducers } from "redux";
import PicturesReducer from "./pictures_reducer";
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    pictures: PicturesReducer
});

export default entitiesReducer; 