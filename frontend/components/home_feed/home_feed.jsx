import React from "react"; 
import { Link } from "react-router-dom";
import EditorsChoice from "./editors_choice";
import { getRandomImage } from "../generator/random_generator";

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
                    <div className="content-box">
                        <center><div className="photo-icon"></div></center>
                        <span className="random-photos"></span><br />
                        <center><h3 id="photo-generator-text">Photo of the week:</h3></center><br />
                        <br /> <p id="editors"> Our editors are always on the lookout for jaw dropping content for you
                            to discover and stay inspired. Check back weekly to see what’s new. </p>
                        <div id="random-photo">

                        </div>
                        <center><button id="generator-button" onClick={getRandomImage}>Click for photo of the week</button></center><br /><br /><br />
                    </div>


                    <div>   
                    <br/>
                        < EditorsChoice />
                    </div>
                    <br />
                    
                </div>
            </div>
        )
    }
}

export default HomeFeed; 