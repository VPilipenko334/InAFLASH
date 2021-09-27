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
                <br/>
                </p>
            </div> 
        )
    }
}

export default PictureRenderIndex; 