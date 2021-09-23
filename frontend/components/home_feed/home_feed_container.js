import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from '../../actions/user_actions';
// import { fetchPictures } from "../../actions/picture_actions";
import HomeFeed from "./home_feed";

const mSTP = (state) => {
    return {
        // pictures: Object.values(state.entities.pictures),
        // errors: state.sessionErrors,
        // users: Object.values(state.entities.user)
        currentUser: users[state.session.id]
    }
}

const mDTP = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchCurrentUser: (userId) => dispatch(fetchUser(userId))
    // fetchPictures: () => dispatch(fetchPictures())
})

export default connect(mSTP, mDTP)(HomeFeed);