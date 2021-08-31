import React from "react";
// import { Redirect } from 'react-router-dom';
// import CreateCommentContainer from '../comments/create_comment_container';
// import CommentIndexContainer from '../comments/comment_index_container';
// import { HiOutlineUserCircle } from "react-icons/hi";
// import { RiHeartLine, RiFolderAddLine, RiShareLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
// import { GrNext } from "react-icons/gr";


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

        const { picture } = this.props;

        if (!picture) return null;

        const user = this.props.users[picture.userId];
        if (!user) return null;
        console.log(user);
        return (
            <div className="picture-show-biggest-container">
                <div className="picture-show-container">
                    <div className="picture-box">
                        <img className="picture-show-img" src={picture.post} />
                    </div>

                </div>
                <div className="after-show-picture">
                    <div className="picture-show-info">
                        <div className="logos">
                            <RiHeartLine size="30" />
                            <RiFolderAddLine size="30" />
                            <RiShareLine size="30" />
                        </div>
                        <div className="center-box">
                            <div className="picture-info-box">
                                <img src={user.profile} />
                                <div className="next-to-picture">
                                    <h2>{picture.title}</h2>
                                    <p> by {user.username} </p>
                                </div>
                            </div>
                            <p>{picture.description}</p>
                        </div>
                    </div>
                    <div className="comment-container">
                        <div className="upgrade">

                        </div>
                        <CreateCommentContainer photoId={this.props.picture.id} />
                        {/* <CommentIndexContainer /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default PictureShow;