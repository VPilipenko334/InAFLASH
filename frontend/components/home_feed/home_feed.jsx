import React from "react"; 
import { Link } from "react-router-dom";

class HomeFeed extends React.Component {
    render() {
        return (
            <div>
                <h1>Hi I am going to be the Home Feed</h1>
                <p> hi I am the inner home feed, this is what the user will see as soon as they log in </p>
                
                    <br/>
                <button> Go to the Pictures Page </button> <br /> <br />
                <button> Go to the Welcome Page  </button> <br /><br />
                <button> Upload a photo </button> <br />

                <br />
                <Link to="/" className="back-home-link">Click to go back to the main page</Link>
            </div>
        )
    }
}

export default HomeFeed; 