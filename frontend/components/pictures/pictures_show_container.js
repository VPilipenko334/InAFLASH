import React from "react";
import { connect } from "react-redux";
import { fetchPicture } from "../../actions/picture_actions";
// import { fetchlikes, createLike, deleteLike } from "../../actions/like_action";
import ShowPicture from "./pictures_show";
import {fetchCurrentUser} from "../../util/user_api_util";


const mSTP = (state, ownProps) => {
  return {
    picture: state.entities.pictures[ownProps.match.params.pictureId],
    // likes: Object.values(state.entities.likes),
    session: state.session.currentUser,
    users: state.entities.users,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchCurrentUser: (userId)=> dispatch(fetchCurrentUser(userId)),
    fetchPicture: pictureId => dispatch(fetchPicture(pictureId)),
    // createLike: (userId, pictureId) => dispatch(createLike(userId, pictureId)),
    // fetchlikes: () => dispatch(fetchlikes()),
    // deleteLike: likeId => dispatch(deleteLike(likeId)),
  };
};

export default connect(mSTP, mDTP)(ShowPicture);
