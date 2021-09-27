import React from 'react'
import { useStore } from 'react-redux';
import { Link } from 'react-router-dom'
import PictureRenderIndex from './picture_render_index';

const PictureIndexItem = (props) => {
    // console.log(props.user);
    // console.log(props.user.pictures);
    // console.log(props.user.pictures);
    // console.log(props.picture.picture);


    return (
        <div>
        <li>
            {/* <Link className="link-to-picture" to={`/pictures/${props.users.picture.id}`}> */}
                {/* <img className="actual-picture" src={props.pictures} /> */}

            {/* </Link> */}
            <h3>{props.user.username}</h3>
            <h3>{props.user.id}</h3>

            
            <img className="picture-render" src={props.pictures} />
                

            {props.user.pictures.map(picture=>(
                <PictureRenderIndex 
                title={picture.title}
                description={picture.description}
                picture={picture.picture}
                key={picture.id} />
            ))}

            {props.pictures.map(picture=>(
                <PictureRenderIndex 
                picture={picture.picture}
                pictureUrl={picture.pictureUrl} />
            ))}
            
        </li>
        </div>
    )
}

export default PictureIndexItem; 


