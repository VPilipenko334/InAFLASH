import React from "react";
import PictureRenderIndex from "../pictures/pictures_index_container";

class EditorsChoice extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPictures();
    }

    render() {

        const { pictures } = this.props;
        if (!pictures) return null;

        return (
            <div>
                <ul>
                    < PictureRenderIndex />
                </ul>
            </div>
        )
    }
}

export default EditorsChoice; 