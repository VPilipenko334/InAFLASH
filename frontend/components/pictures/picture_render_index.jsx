import React from 'react';

class PictureRenderIndex extends React.Component {
    

    render() {
       const {description, title, pictureUrl} = this.props;  

    //    if (!pictureUrl) return null; 

        return (
            <div>
                <p>
                {description};
                {title};
                {pictureUrl};    
                </p>
            </div> 
        )
    }
}

export default PictureRenderIndex; 