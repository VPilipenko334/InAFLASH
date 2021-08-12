import React from "react";
import { connect } from "react-redux";
import UploadPicture from "./upload_picture";
import { withRouter } from "react-router";
import { createPicture } from "../../actions/picture_actions";

const mapStateToProps = (state={}) => {
    return {
        picture: state.entities.pictures, 
        currentUser: state.session.id    // or state.session.currentUser.id?
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPicture: picture => dispatch(createPicture(picture)),
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(UploadPicture);
