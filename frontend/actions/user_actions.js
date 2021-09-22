import * as ApiUser from "../util/user_api_util";

import { receivePicture } from './picture_actions';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const RECEIVE_USERS = "RECEIVE_USERS";


export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user,
});
export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users,
});

export const receiveUserErrors = (errors) => ({
    type: RECEIVE_USER_ERRORS,
    errors,
});

export const fetchUserPictures = (userId) => (dispatch) => (
    ApiUserUtil
        .fetchUserPictures(userId)
        .then((pictures) => dispatch(receivePictures(pictures)))
        .fail((err) => dispatch(receiveUserErrors(err.responseJSON)))
)

export const fetchUser = userId => dispatch => (
    ApiUserUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
        .fail(err => dispatch(receiveUserErrors(err.responseJSON)))
);
export const updateUser = user => dispatch => (
    ApiUserUtil.updateUser(user).then(user => dispatch(receiveUser(user)))
        .fail(err => dispatch(receiveUserErrors(err.responseJSON)))
);
export const fetchUsers = () => dispatch => (
    ApiUserUtil.fetchUsers().then(users => dispatch(receiveUsers(users)))
        .fail(err => dispatch(receiveUserErrors(err.responseJSON)))
);