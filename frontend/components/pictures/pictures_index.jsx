import React from "react";
import { Link } from "react-router-dom";

class PictureIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPictures();
        this.props.fetchUsers();
    }


    render() {
        return (
            'hello I am the picture Index Component'
        )
    }
}

export default PictureIndex; 