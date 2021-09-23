import React from "react";
import { connect } from "react-redux";
import HomeFeed from "./home_feed";

const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};


const mDTP = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchCurrentUser: (userId) => dispatch(fetchUser(userId))
    // fetchPictures: () => dispatch(fetchPictures())
})

export default connect(mSTP, mDTP)(HomeFeed);