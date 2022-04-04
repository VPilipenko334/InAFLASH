import React from 'react';
import { Link } from 'react-router-dom'

class PictureRenderIndex extends React.Component {

    render() {
        const { picture } = this.props;
        return (
            <div>
                <Link to={`/pictures/${picture.id}`} className="picture-render-link">
                    <img className="picture-render" src={picture.picture} />
                </Link>
                <br />

            </div>
        )
    }
}

export default PictureRenderIndex; 