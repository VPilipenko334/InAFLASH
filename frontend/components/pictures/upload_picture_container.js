import { connect } from "react-redux";
import UploadPicture from "./upload_picture";
import { createPicture } from "../../actions/picture_actions";
import { fetchPicture } from "../../actions/picture_actions"


const mapStateToProps = (state) => {
    return {
        picture: state.entities.pictures,
        currentUserId: state.session.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPicture: picture => dispatch(createPicture(picture)),
        fetchPicture: pictureId => dispatch(fetchPicture(pictureId))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(UploadPicture);
