import React from 'react';
import { connect } from 'react-redux';
import { fetchPictures } from '../../util/picture_api_util';
// import likes when they are complete 
import HomePage from './home'

const mSTP = (state) => {
    return {
        pictures: Object.values(state.entities.pictures),
        //likes 
        session: state.session,
    };
};

const mDTP = (dispatch) => {
    return {
        fetchPictures: () => dispatch(fetchPictures()),
        //fetchLikes
        //createLikes
        //deleteLikes
    }
}

export default connect(mSTP, mDTP)(HomePage);
