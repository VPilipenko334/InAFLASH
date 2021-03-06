import React from "react";
import PictureIndexItem from "./picture_item_page";
import PictureRenderIndex from "./picture_render_index";

class PictureIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchPictures();
        this.props.fetchUsers();
    }

    render() {

        const { pictures } = this.props;
        if (!pictures) return null;

        const { users } = this.props;
        if (!users) return null;

        return (
            <div className="upload-opener2">
                <div className="picture-index-text">
                    <h1>Pictures Feed</h1> <br />
                    <center><h3>See photos and published Galleries from your favorite artists.</h3></center> <br />

                    <div className="outer-container">
                        <div className="inner-container">

                            <ul className="pictures-list">
                                {
                                    pictures.map(picture => (
                                        <PictureRenderIndex
                                            picture={picture}
                                            key={picture.id}
                                        />
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PictureIndex;