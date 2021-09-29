import React from "react";
import { Redirect } from 'react-router-dom';
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

        const { picture } = this.props;
        if (!picture) return null;

    
        return (
            <div>
                <div className="upload-opener">
                    <div className="show-container">
                    <button className="back-home" onClick={this.handleback}>hello this button takes you back</button><br /><br />

                        <div className="show-page">
                            <center><img className="picture_show_img" height="500" width="500" src={picture.pictureUrl} alt="" /></center>
                        </div>

                    <h5>{picture.title}</h5> <br/>
                    <h4>{picture.description}</h4><br />

                    <Link to="/" className="upload-button-form">Home</Link> <br /> <br />
                    <Link to="/pictures" className="upload-button-form">See all pictures</Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default PictureShow;

