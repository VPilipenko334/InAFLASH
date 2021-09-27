import React from "react";
import { Link } from 'react-router-dom';
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

        // console.log(pictures);
        // console.log(users);

        return (
                <div className="upload-opener">
                    <div className="upload-photo-container">

                    <ul>
                        {
                            users.map(user => (
                                <PictureIndexItem
                                user={user}
                                pictures={pictures}
                                key={user.id}
                                />
                            ))
                        }
                        <img className="picture-render" src={users.pictures} />

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
        )
    }
}

export default PictureIndex;