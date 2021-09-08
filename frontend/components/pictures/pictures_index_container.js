import React from "react";
import { connect } from "react-redux";
import { fetchPictures } from '../../actions/picture_actions'; 
import { fetchUsers } from '../../actions/user_actions';
import PictureIndex from "./pictures_index";

const mSTP = (state) => {
    return {
        pictures: Object.values(state.entities.pictures),
        errors: state.sessionErrors, 
        users: Object.values(state.entities.users)
    }
}

const mDTP = (dispatch) => ({
    fetchPictures: () => dispatch(fetchPictures()),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP, mDTP)(PictureIndex); 