import React from "react";
// import CreateCommentContainer from '../comments/create_comment_container';
// import { RiHeartLine, RiFolderAddLine, RiShareLine } from "react-icons/ri";
import { Link } from 'react-router-dom';


class PictureShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: undefined,
        };
        this.handleback = this.handleback.bind(this);

    }

    componentDidMount() {
        this.props.fetchPicture(this.props.match.params.id);
        this.props.fetchCurrentUser();
        // this.props.fetchlikes();
        // this.props.fetchlikes();
        // this.setState({userId: this.props.fetchUser(this.props.picture.userId)});
        // this.props.fetchUser(this.props.picture.userId);
        // console.log(this.props.picture);

    }

    handleback() {
        this.props.history.goBack();
    }

    render() {
        <div>
            hello
        </div>
    }
}

export default PictureShow;