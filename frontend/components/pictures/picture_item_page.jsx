import React from 'react'
import { Link } from 'react-router-dom'

const PictureIndexItem = (props) => {
    return (
        <div>
        <li>
            {/* <Link className="link-to-picture" to={`/pictures/${props.users.picture.id}`}> */}
                <img className="actual-picture" src={props.pictures.pictureUrl} />

            {/* </Link> */}
            <h3>{props.user.username}</h3>
            {/* <h3>{props.picture.title}</h3> */}
            {/* <p>{props.users.pictures}</p> */}
            <p>{props.pictures}</p>
            <p>{props.pictureUrl}</p>
        </li>
        </div>
    )
}

export default PictureIndexItem; 


