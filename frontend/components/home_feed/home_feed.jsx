import React from "react";
import { Link } from "react-router-dom";
import EditorsChoice from "./editors_choice_container";

class HomeFeed extends React.Component {

    render() {
        return (
            <div className="upload-opener">
                <div className="homefeed-container">
                    <div className="background-homefeed">

                        <img alt="user-avatar" className="avatar" src="https://drscdn.500px.org/user_avatar/37881/q%3D85_w%3D300_h%3D300/v2?webp=true&amp;v=127&amp;sig=ff6a893975f2248ad34d0ea29c54b42f8cf1b3bbd4f39b358003a8723433328e"></img>
                    </div><br />
                    <h1 class="home-feed-text"> Home Feed</h1>

                    <br />

                    <center><p>See photos and published Galleries from people you follow.</p></center>
                    <br />
                    <br />
                    <div className="inner-homefeed-buttons">
                        <br />
                        <Link to="/upload" className="upload-button-form">Upload</Link>&nbsp;
                        <Link to="/pictures" className="upload-button-form">Share </Link>&nbsp;
                    </div>
                    < EditorsChoice />

                </div>
                <br />

            </div>
        )
    }
}

export default HomeFeed; 