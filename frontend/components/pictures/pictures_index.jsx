import React from "react";
import PictureIndexItem from "./picture_item_page";

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
                    </ul>
                </div>
             </div>
        )
    }
}

export default PictureIndex;