import React from "react"; 
import { Link } from "react-router-dom";

class HomeFeed extends React.Component {
    render() {
        return (
            <div className="upload-opener">
                <div className="upload-photo-container">
                <h1>Hi I am going to be the Home Feed</h1>
                <p> hi I am the inner home feed </p>
                
                    <br/>

                    <Link to="/pictures" className="upload-button-form">Go to the Pictures Page </Link><br />
                    <Link to="/" className="upload-button-form">Go to the Welcome Page</Link><br />
                    <Link to="/upload" className="upload-button-form">Upload a Picture</Link><br />
                    <Link to="/" className="upload-button-form">Click to go back to the main page</Link><br />
                </div>
            </div>
        )
    }
}

export default HomeFeed; 