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
            <div>
                {
                    pictures.map(picture => (
                        <PictureRenderIndex
                            picture={picture}
                            key={picture.id} />
                    ))

                }
            </div>
        )
    }
}

export default PictureHome; 