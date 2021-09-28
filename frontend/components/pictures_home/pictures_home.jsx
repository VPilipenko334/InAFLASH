import React from "react";
import { Link } from "react-router-dom";

class PictureHome extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPictures();
        this.props.fetchUsers();
    }


    render() {
        return (
            <li>
                <Link to={`/pictures/${picture.id}`} className="picture-render-link">
                    <img className="picture-render" height="300" width="300" src={props.pictures.picture} />
                </Link>
            </li>
        )
    }
}

export default PictureHome; 