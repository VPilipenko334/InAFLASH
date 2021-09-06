import { receiveUser } from './user_actions';

import * as followAPI from '../util/follow_api_util';


export const createFollow = followerId => dispatch => (
    followAPI.createFollow(followerId).then(user => (dispatch(receiveUser(user))))
);


export const deleteFollow = followedId => dispatch => (
    followAPI.deleteFollow(followedId).then(user => (dispatch(receiveUser(user))))
);
