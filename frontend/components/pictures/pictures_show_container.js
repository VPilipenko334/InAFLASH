import React from "react";
import { connect } from "react-redux";
import { fetchPicture } from "../../actions/picture_actions";
import { fetchUsers } from "../../actions/user_actions";
import PictureShow from "./pictures_show";
// import { fetchlikes, createLike, deletelike } from "../../actions/like_actions";


const mSTP = (state, ownProps) => {
    const picture = state.entities.pictures[ownProps.match.params.id];
    return {
        picture: picture,
        session: state.session.currentUser,
        // user: state.entities.users[picture.userId],
        // likes: Object.values(state.entities.likes),
        users: state.entities.users,
        // users :state.entities.users,
        // user: pictureUserSelector(state, ownProps.match.params.id),
    };
};

const mDTP = dispatch => {
    return {
        fetchPicture: pictureId => dispatch(fetchPicture(pictureId)),
        fetchUsers: () => dispatch(fetchUsers()),
        // fetchlikes: () => dispatch(fetchlikes()),
        // createLike: (likerId, photoId) => dispatch(createLike(likerId, photoId)),
        // deleteLike: likeId => dispatch(deleteLike(likeId))
    };
};

export default connect(mSTP, mDTP)(PictureShow);