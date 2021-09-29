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
            <div className="upload-opener">
                        <div className="photo-feed-text">
                            <h1>Pictures Feed</h1> <br/> 
                            <center><h3>See photos and published Galleries from your favorite artists.</h3></center> <br/>
                        </div>
                        
                <div className="upload-opener">
                    <div className="index-container">

                        <div className="row">
                        {/* {
                            users.map(user => (
                                <PictureIndexItem
                                user={user}
                                pictures={pictures}
                                key={user.id}
                                />
                            ))
                        } */}
                        
                        {
                            pictures.map(picture => (
                                <PictureRenderIndex
                                    picture={picture}
                                    key={picture.id}
                                />
                            ))
                        }

                    </div>
                </div>
             </div>
            </div>
        )
    }
}

export default PictureIndex;