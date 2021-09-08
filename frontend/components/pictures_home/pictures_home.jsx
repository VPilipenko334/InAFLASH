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
        return 'hi frenz I am the pictures home component'
    }
}

export default PictureHome; 