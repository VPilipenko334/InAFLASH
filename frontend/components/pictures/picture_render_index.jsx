import React from 'react';
import { Link } from 'react-router-dom'

class PictureRenderIndex extends React.Component {
    

    render() {
       const { description, title, picture} = this.props;  
        // console.log(picture)
        // console.log(picture.picture.id)
        return (
            <div>
{/*              
                {title} <br/> 
                {description} <br />  */}
                    <Link to={`/pictures/${picture.id}`} className="picture-render-link">
                            <img className="picture-render" src={picture.picture} />
                    </Link>
                    <h1 className="picture-title">{picture.title}</h1>
                <br/>
            
            </div> 
        )
    }
}

export default PictureRenderIndex; 