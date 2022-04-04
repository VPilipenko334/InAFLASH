import { connect } from "react-redux";
import { fetchPictures } from "../../actions/picture_actions";
import SearchBar from "./search_ bar";

const mapStateToProps = (state) => ({
    pictures: Object.values(state.entities.pictures)
})

const mapDispatchToProps = (dispatch) => ({
    fetchPictures: () => dispatch(fetchPictures())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);