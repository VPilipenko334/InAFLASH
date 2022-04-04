import { connect } from "react-redux";
import EditorsChoice from "./editors_choice";
import { fetchPictures } from "../../actions/picture_actions";

const mSTP = (state) => {
    return {
        pictures: state.entities.pictures
    }
}

const mDTP = (dispatch) => ({
    fetchPictures: () => dispatch(fetchPictures())
})

export default connect(mSTP, mDTP)(EditorsChoice);