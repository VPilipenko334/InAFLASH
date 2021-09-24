import React from 'react'
import { Link } from 'react-router-dom'
import PictureRenderIndex from './picture_render_index';

const PictureIndexItem = (props) => {
    // console.log(props.user);
    // console.log(props.user.pictures);


    return (
        <div>
        <li>
            {/* <Link className="link-to-picture" to={`/pictures/${props.users.picture.id}`}> */}
                {/* <img className="actual-picture" src={props.pictures} /> */}

            {/* </Link> */}
            <h3>{props.user.username}</h3>
            <h3>{props.user.id}</h3> 

            {props.user.pictures.map(picture=>(
                <PictureRenderIndex 
                title={picture.title}
                description={picture.description}
                key={picture.id} />
            ))}

            {/* {props.pictures.map(picture=>(
                <PictureRenderIndex 
                pictureUrl={picture.pictureUrl} />
            ))} */}
            
        </li>
        </div>
    )
}

export default PictureIndexItem; 


