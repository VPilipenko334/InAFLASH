import React from "react";
// import PictureItem from "./picture_item_page";

class PictureIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPictures()
        // this.props.fetchlikes()
    }

    render() {
        const { pictures } = this.props
        if (!pictures) return null;

        return (
          'hello i am picture index'
        )
    }

}

export default PictureIndex