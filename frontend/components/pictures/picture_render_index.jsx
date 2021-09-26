import React from 'react';

class PictureRenderIndex extends React.Component {
    

    render() {
       const {description, title, pictureUrl} = this.props;  

       if (!pictureUrl) return null; 

        return (
            <div>
                <p>
                {title} <br/>
                {description} <br /> 
                {pictureUrl} <br />
                </p>
            </div> 
        )
    }
}

export default PictureRenderIndex; 