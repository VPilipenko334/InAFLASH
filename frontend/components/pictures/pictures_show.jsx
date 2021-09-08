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
                            <i className="fas fa-heart"></i>
                        </button> :
                        <button className="like_button" onClick={() => this.props.createLike(this.props.session.id, this.props.picture.id)}>
                            <i className="far fa-heart"></i>
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

        if (picture === undefined)
            return null;
        console.log('hello this works')
        // console.log(this.props)
        // console.log(this.state)
        // console.log(picture)
        return (
            <div>

                <button onClick={this.handleback}>hello this is a button</button><br/>
                <img className="image-preview" src={picture.pictureUrl} />
                {/* {this.isUser()} */}
                {/* <h5>{picture.title}</h5> */}

                

            </div>
        )
    }

}

export default PictureShow

