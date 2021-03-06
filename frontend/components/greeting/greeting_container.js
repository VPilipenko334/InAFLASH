import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import { fetchPictures } from '../../util/picture_api_util';
import Greeting from './greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
