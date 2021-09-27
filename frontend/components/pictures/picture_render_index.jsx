import React from 'react';

class PictureRenderIndex extends React.Component {
    

    render() {
       const { description, title, picture } = this.props;  
        
        return (
            <div>
                <img className="picture-render" src={picture} />

                <p>
                {title} <br/>
                {description} <br />
                </p>
            </div> 
        )
    }
}

export default PictureRenderIndex; 