import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from '../../actions/user_actions';
import PictureIndex from "./pictures_index";
import { fetchPictures } from "../../actions/picture_actions";

const mSTP = (state) => {
    return {
        pictures: Object.values(state.entities.pictures),
        // errors: state.sessionErrors,
        users: Object.values(state.entities.users)
    }
}

const mDTP = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPictures: () => dispatch(fetchPictures())
})

export default connect(mSTP, mDTP)(PictureIndex);