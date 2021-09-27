import React from 'react'
import { connect } from "react-redux";
import { render } from 'react-dom';
import { useStore } from 'react-redux';
import { Link } from 'react-router-dom'
import PictureRenderIndex from './picture_render_index';
import {fetchPictures} from '../../actions/picture_actions';

export class PictureIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    // console.log(props.user);
    // console.log(props.user.pictures);
    // console.log(props.user.pictures);
    // console.log(props.picture.picture);

    // componentDidMount() {
    //     this.props.fetchPictures();

    // }

    render() {
    // console.log(this.props.pictures)
    return (
        <div>
        <li>
            <h3>{this.props.user.username}</h3>
            <h3>{this.props.user.id}</h3>

                {/* <Link className="picture-render" to={`/pictures/${this.props.pictures.pictureId}`}></Link>  */}
                {this.props.pictures.map(picture => {
                    // console.log(picture.picture);
                    <img className="picture-render" height="300" width="300" src={picture.picture} />
                 })}

             
{/* 
            {this.props.user.pictures.map(picture=>(
                <PictureRenderIndex 
                title={picture.title}
                description={picture.description}
                picture={picture.picture}
                key={picture.id} />
            ))} */}


            {this.props.pictures.map(picture=>(
                <PictureRenderIndex 
                picture={picture.picture}
                pictureUrl={picture.pictureUrl}
                key={picture.id} />
            ))}
            
        </li>
        </div>
      )
    }
  }


export default PictureIndexItem; 

// const mSTP = (state) => {
//     return {
//         pictures: Object.values(state.entities.pictures),
//         errors: state.sessionErrors,
//         users: Object.values(state.entities.users)
//     }
// }

// const mDTP = (dispatch) => ({
//     fetchUsers: () => dispatch(fetchUsers()),
//     fetchPictures: () => dispatch(fetchPictures()),
//     // fetchPicture: pictureId => dispatch(fetchPicture(pictureId)),
// })

// export default connect(mSTP, mDTP)(PictureIndexItem);
