import React from "react";
import { Redirect } from 'react-router-dom';

class PictureShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            picture: ""
        }
        this.handleback = this.handleback.bind(this)
        // this.handleprofile = this.handleprofile(this)
    }

    componentDidMount() {
        this.props.fetchPicture(this.props.match.params.pictureId)
        // this.props.fetchPictures();
        this.props.fetchUsers();
        // this.props.fetchlikes()
        // console.log(this.props)
    }


    handleback() {
        this.props.history.goBack()
    }


    toggleLike() {
        let liked = false
        let pictureLiked = []
        for (let i = 0; i < this.props.likes.length; i++) {
            if (this.props.likes && this.props.picture.id === this.props.likes[i].pictureId && this.props.session.id == this.props.likes[i].userId) {
                pictureLiked.push(this.props.likes[i].id)
                liked = true
            }
        }
        return (
            <div className="like_button_box">
                {
                    liked ?
                        <button className="like_button" onClick={() => this.props.deleteLike(pictureLiked[0])}>
                            <i className="like"></i>
                        </button> :
                        <button className="like_button" onClick={() => this.props.createLike(this.props.session.id, this.props.picture.id)}>
                            <i className="like"></i>
                        </button>
                }
            </div>
        )
    }

    isUser() {
        // debugger
        if (this.props.session === null) {
            return null
        } else if (this.props.session.id === this.props.picture.userId) {
            return null
        } else {
            return this.toggleLike()
        }
    }

    handleUser() {
        if (this.props.picture === null) {
            return null
        }

        return (
            <div>
                Username: { }
            </div>
        )
    }

    render() {

        const { picture } = this.props;
        if (!picture) return null;

        // const user = this.props.users[picture.userId];
        // if (!user) return null;
        // console.log(user);
        return (
            <div>
                <div className="upload-opener">
                    <button onClick={this.handleback}>hello this is a button</button><br/>
                    <img className="picture_show_img" height="500" width="500" src={picture.pictureUrl} alt="" />
                    {/* {this.isUser()} */}
                    <h5>{picture.title}</h5>
                    <h4>{picture.description}</h4>
                    
                </div>
            </div>
        )
    }

}

export default PictureShow

