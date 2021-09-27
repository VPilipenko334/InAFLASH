import React from 'react'
import PictureRenderIndex from './picture_render_index';

export class PictureIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
        <div>
            
            <li>
                <h3>{this.props.user.username}</h3>
                <h3>{this.props.user.id}</h3>

                
                {this.props.pictures.map(picture=>(
                    <PictureRenderIndex 
                    title={picture.title}
                    description={picture.description}
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