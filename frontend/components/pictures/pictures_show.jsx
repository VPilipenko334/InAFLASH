import React from "react";
import { Link } from 'react-router-dom';

class PictureShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            picture: ""
        }
        this.handleback = this.handleback.bind(this)
    }

    componentDidMount() {
        this.props.fetchPicture(this.props.match.params.pictureId);
        this.props.fetchUsers();
    }


    handleback() {
        this.props.history.goBack()
    }

    render() {

        const { users } = this.props;
        if (!users) return null;

        const { picture } = this.props;
        if (!picture) return null;

        return (
            <div>
                <div className="upload-opener">
                    <div className="show-container">
                        <div className="show-buttons">
                            <button className="back-button" onClick={this.handleback}>Back</button>
                            <Link to="/home" className="back-button">Home</Link>
                            <Link to="/pictures" className="back-button">Pictures</Link>
                        </div>

                        <div className="show-page">

                            <center><img className="picture_show_img" src={picture.pictureUrl} alt="" /></center>
                        </div>

                        <div className="background-container-show">

                            <img className="camera" src="camera2.png"></img>

                            <h1>{picture.title}</h1> <br />

                            <h1>{picture.description}</h1><br />


                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default PictureShow;

