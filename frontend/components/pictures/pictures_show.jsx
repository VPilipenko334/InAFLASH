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
        this.props.fetchPicture(this.props.match.params.pictureId);
        // this.props.fetchUser();
        // this.props.fetchlikes();
    }

    handleback() {
        this.props.history.goBack();
    }

    // toggleLike() {
    //     let like = false
    //     let likePicture = []
    //     for (let i = 0; i < this.props.likes.length; i++) {
    //         if (this.props.likes && this.props.picture.id === this.props.likes[i].pictureId && this.props.session.id == this.props.likes[i].userId) {
    //             likePicture.push(this.props.likes[i].id)
    //             like = true
    //         }
    //     }

    //     return (
    //         <div className="like_button_box">
    //             {
    //                 like ?
    //                     <button className="like_button" onClick={() => this.props.deleteLike(pictureLiked[0])}>
    //                         <i className="liked-class"></i>
    //                     </button> :
    //                     <button className="like_button" onClick={() => this.props.createLike(this.props.session.id, this.props.picture.id)}>
    //                         <i className="liked-class"></i>
    //                     </button>
    //             }
    //         </div>
    //     )
    // }

    // isUser() {
    //     if (this.props.session === null) {
    //         return null
    //     } else if (this.props.session.id === this.props.picture.ownerId) {
    //         return null
    //     } else {
    //         return this.toggleLike()
    //     }
    // }


    render() {
        // console.log(this.props)
        // console.log(pictureId)
        return (
            'hello darkness my old friend' 
        )
    }
}

export default PictureShow;