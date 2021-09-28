import React from 'react'
import PictureRenderIndex from './picture_render_index';

export class PictureIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
        <div>
            
            {/* <ul> */}
                <h2>{this.props.user.username}</h2>
                

                {this.props.pictures.map(picture=>(
                    <PictureRenderIndex 
                    title={picture.title}
                    description={picture.description}
                    picture={picture.picture}
                    pictureUrl={picture.pictureUrl}
                    key={picture.id} />
                ))}
                
            {/* </ul> */}

        </div>
      )
    }
  }


export default PictureIndexItem; 