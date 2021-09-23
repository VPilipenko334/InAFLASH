import React from "react"; 
import { render } from "react-dom";
import { Link } from "react-router-dom";


const HomeFeed = (props) => {
    console.log(props);
        return (
            <div>
                <h1>Hi I am going to be the Home Feed</h1>
                <p> hi I am the inner home feed </p>
                <div>
                    <h1>welcome!</h1>
                </div>
                    <br/>
                <button> Go to the Pictures Page </button> <br/>
                <button> Go to the Welcome Page  </button> <br/>
                <button> Upload a photo </button> <br/>

                <br/>
                <Link to="/" className="back-home-link">Click to go back to the main page</Link>
            </div>
        )

}


// class HomeFeed extends React.Component {

//     render() {

//         return (
//             <div>
//                 <h1>Hi I am going to be the Home Feed</h1>
//                 <p> hi I am the inner home feed </p>
//                 <div>
//                     <h1>welcome!</h1>
//                 </div>
//                     <br/>
//                 <button> Go to the Pictures Page </button> <br/>
//                 <button> Go to the Welcome Page  </button> <br/>
//                 <button> Upload a photo </button> <br/>

//                 <br/>
//                 <Link to="/" className="back-home-link">Click to go back to the main page</Link>
//             </div>
//         )
//     }
// }

export default HomeFeed; 