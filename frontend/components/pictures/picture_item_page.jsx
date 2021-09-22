import React from 'react'
import { Link } from 'react-router-dom'
import PictureRenderIndex from './picture_render_index';

const PictureIndexItem = (props) => {
    // console.log(props);

    return (
        <div>
        <li>
            {/* <Link className="link-to-picture" to={`/pictures/${props.users.picture.id}`}> */}
                <img className="actual-picture" src={props.pictures.pictureUrl} />

            {/* </Link> */}
            <h3>{props.user.username}</h3>
            <h3>{props.user.id}</h3>

            {props.pictures.map(picture=>(
                <PictureRenderIndex 
                title={picture.title}
                description={picture.description}
                pictureUrl = {picture.pictureUrl} />
            ))}
            
        </li>
        </div>
    )
}

export default PictureIndexItem; 


