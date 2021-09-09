import React from "react";
import { connect } from "react-redux";
import { fetchPicture } from "../../actions/picture_actions";
import { fetchUsers } from "../../actions/user_actions";
import PictureShow from "./pictures_show";
// import { fetchlikes, createLike, deletelike } from "../../actions/like_actions";


const mSTP = (state, ownProps) => {
    const picture = state.entities.pictures[ownProps.match.params.pictureId];
    return {
        picture: picture,
        session: state.session.currentUser,
        users: state.entities.users,
    };
};

const mDTP = dispatch => {
    return {
        fetchPicture: pictureId => dispatch(fetchPicture(pictureId)),
        fetchUsers: () => dispatch(fetchUsers()),
    };
};

export default connect(mSTP, mDTP)(PictureShow);