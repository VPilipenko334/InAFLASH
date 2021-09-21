import React from 'react'
import { Link } from 'react-router-dom'

const PictureIndexItem = (props) => {
    return (
        <div>
        <li>
            {/* <Link className="link-to-picture" to={`/pictures/${props.picture.id}`}>
                <img className="actual-picture" src={props.picture.pictureUrl} />
            </Link> */}
            <h3>{props.user.username}</h3>
            {/* <p>{props.users.pictures}</p> */}
        </li>
        </div>
    )
}

export default PictureIndexItem; 















// import React from "react";
// import { Link } from "react-router-dom";

// const PictureItemPage = (props) => {
//     const { picture } = props; 

//     return (
//         <li className="picture-item-page">
//             <Link to={`/pictures/${picture.id}`}>
//                 <div className="overlay">
//                 </div>
//                 <img src={picture.pictureUrl} className="picture-url" />
//             </Link>
//         </li>
//     )
// }

// export default PictureItemPage; 
