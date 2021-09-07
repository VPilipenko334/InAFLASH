import React from "react";
import { connect } from "react-redux";
import UploadPicture from "./upload_picture";
import { withRouter } from "react-router";
import { createPicture } from "../../actions/picture_actions";
import { fetchPicture } from "../../util/picture_api_util";
// import { fetchPicture } from '../../util/picture_api_util';
// import { createPicture } from '../../util/picture_api_util';

//do I need to keep state an empty object??
const mapStateToProps = (state) => {
    return {
        picture: state.entities.pictures, 
        currentUserId: state.session.id 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPicture: picture => dispatch(createPicture(picture)),
        fetchPicture :pictureId => dispatch(fetchPicture(pictureId))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(UploadPicture);
