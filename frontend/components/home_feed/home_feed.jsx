import React from "react"; 
import { Link } from "react-router-dom";
import EditorsChoice from "./editors_choice_container";

class HomeFeed extends React.Component {

    render() {
        return (
            <div className="upload-opener">
                <div className="upload-photo-container">
                    <h1>Home Feed</h1>
                    
                    <br />
                        <center><p>See photos and published Galleries from people you follow.</p></center>

                    <br/>
                    <center>
                        <Link to="/upload" className="upload-button-form">Upload a Picture</Link><br />
                        <Link to="/pictures" className="upload-button-form">See All Pictures </Link><br />
                        {/* <Link to="/" className="upload-button-form">Go to the Welcome Page</Link><br /> */}
                        <Link to="/" className="upload-button-form">Click to go back to the main page</Link><br />
                    </center>
                    <br />

                    <h1>Hand-picked by our editors</h1>
                    <br />
                    <center><p>Check out photos selected by our InAFlash Editor.</p></center>
                    <div>   
                    <br/>
                        {/* < EditorsChoice /> */}
                    </div>
                    <br />
                    
                </div>
            </div>
        )
    }
}

export default HomeFeed; 