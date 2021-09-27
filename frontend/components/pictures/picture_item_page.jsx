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
            <h3>{props.user.username}</h3>
            <h3>{props.user.id}</h3>
                <Link className="picture-render" to={`/pictures/${props.user.pictures.pictureId}`}></Link>
                <img className="picture-render" height="300" width="300" src={props.user.pictures.picture} />
            
            {/* <img className="picture-render" src={props.pictures} /> */}
                

            {props.user.pictures.map(picture=>(
                <PictureRenderIndex 
                title={picture.title}
                description={picture.description}
                picture={picture.picture}
                key={picture.id} />
            ))}

            {/* {props.pictures.map(picture=>(
                <PictureRenderIndex 
                picture={picture.picture}
                pictureUrl={picture.pictureUrl} />
            ))} */}
            
        </li>
        </div>
    )
}

export default PictureIndexItem; 


