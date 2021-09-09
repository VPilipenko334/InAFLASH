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


    render() {

        const { picture } = this.props;
        if (!picture) return null;
        // console.log(picture);

        return (
            <div>
                <div className="upload-opener">
                    <button onClick={this.handleback}>hello this is a button</button><br/>
                    <img className="picture_show_img" height="500" width="500" src={picture.pictureUrl} alt="" />
                    <h5>{picture.title}</h5> by
                    <h4>{picture.description}</h4>

                    <h1>{users.name}</h1> 

                    <button>back to the home page</button>
                </div>
            </div>
        )
    }

}

export default PictureShow

