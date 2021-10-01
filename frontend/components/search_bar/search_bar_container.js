import { connect } from "react-redux";
import { fetchUsers } from "../../actions/user_actions";
import { fetchPictures } from "../../actions/picture_actions";
import SearchBar from "./search_ bar";

const mapStateToProps = (state) => ({
    users: Object.values(state.entities.users),
    // pictures: Object.values(state.entitites.pictures)
})

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPictures: () => dispatch(fetchPictures())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);