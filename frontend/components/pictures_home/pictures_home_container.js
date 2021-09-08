import React from 'react';
import { connect } from 'react-redux';
import { fetchPictures } from '../../actions/picture_actions';
import {fetchUser, fetchUsers } from '../../actions/user_actions';
import HomePage from './home'

const mSTP = (state) => {
    return {
        pictures: Object.values(state.entities.pictures),
        errors: state.sessionErrors, 
        session: state.session,
        users: Object.values(state.entities.users)
    };
};

const mDTP = (dispatch) => {
    return {
        fetchPictures: () => dispatch(fetchPictures()),
        fetchUsers: () => dispatch(fetchUsers())
        // fetchCurrentUser: (userId) => dispatch(fetchUser(userId))
        //fetchLikes
        //createLikes
        //deleteLikes
    }
}

export default connect(mSTP, mDTP)(HomePage);
