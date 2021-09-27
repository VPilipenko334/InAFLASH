import React from 'react';

class PictureRenderIndex extends React.Component {
    

    render() {
       const {description, title, picture} = this.props;  

        return (
            <div>
                <p>
                {title} <br/>
                {description} <br />
                {picture} <br/>
                </p>
            </div> 
        )
    }
}

export default PictureRenderIndex; 