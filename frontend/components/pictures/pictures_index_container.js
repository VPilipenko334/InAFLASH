import React from "react";
import {connect} from 'react-redux';
import { fetchPictures } from '../../actions/picture_actions'
// import { fetchPicture } from "../../util/picture_api_util";
import PictureIndex from "./pictures_index";

const mapStateToProps = (state= {}) => {
    return {
        pictures: Object.values(state.entities.pictures),
        session: state.session.currentUser
    }
}

const mapDispatchToProps = dispatch => ({
    fetchpictures: () => dispatch(fetchPictures())
})

export default connect(mapStateToProps, mapDispatchToProps)(PictureIndex)