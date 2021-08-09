import React from "react";
import { connect } from "react-redux";
import { UploadPicture } from './upload_picture';
import { withRouter } from "react-router";

const mapStateToProps = (state={}) => {
    return {
        picture: state.entities.pictures, 
        currentUser: state.session.currentUser.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPicture: picture => dispatch(createPicture(picture))
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps));
