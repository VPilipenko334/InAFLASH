import React from 'react';
import { Link } from 'react-router-dom'

class PictureRenderIndex extends React.Component {
    

    render() {
       const { description, title, picture } = this.props;  
        
        return (
            <div>
                <p>

                {title} <br/>
                {description} <br />
                    {/* {this.props.pictures.map(picture => { */}
                        <img className="picture-render" height="300" width="300" src={picture} />
                    {/* })} */}
                <br/>
                </p>
            </div> 
        )
    }
}

export default PictureRenderIndex; 