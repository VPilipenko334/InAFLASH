//login(user) --> thunk action creator 
//logout() --> thunk action creator 
//signup(user) --> thunk action creator 

//receiveCurrentUser(currentUser) --> regular action creator 
//logoutCurrentUser() --> regular action creator 
//receiveErrors(errors) --> regular action creator 
    //--> errors is an array 
    // all other action creators will accept an object 
import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIEVE_SESSION_ERRORS = 'RECEIEVE_SESSION_ERRORS';

export const receiveCurrentUser = currentuser => ({
    type: RECEIVE_CURRENT_USER,
    currentuser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIEVE_SESSION_ERRORS,
    errors
});

export const signup = (user) => dispatch => (
    APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user))), err => (dispatch(receiveErrors(err.responseJSON)))
)

export const login = (user) => dispatch => (
    APIUtil.login(user).then(user => dispatch(receiveCurrentUser(user))), err => (dispatch(receiveErrors(err.responseJSON)))
)

export const logout = () => dispatch => (
    APIUtil.logout().then(user => dispatch(logoutCurrentUser())), err => (dispatch(receiveErrors(err.responseJSON)))
)

