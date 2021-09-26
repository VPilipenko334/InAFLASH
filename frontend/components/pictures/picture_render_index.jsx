import React from 'react';

class PictureRenderIndex extends React.Component {
    

    render() {
       const {description, title, picture, pictureUrl} = this.props;  

    //    if (!pictureUrl) return null; 

        return (
            <div>
                <p>
                {title} <br/>
                {description} <br />
                {picture} <br/>
                {/* {pictureUrl} <br /> */}
                </p>
            </div> 
        )
    }
}

export default PictureRenderIndex; 