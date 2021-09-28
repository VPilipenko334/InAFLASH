import React from "react";
import EditorItemPage from "./editors_item_pictures";

class EditorsChoice extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPictures // not a function??
    }

    render() {

        const { pictures } = this.props; 
        if (!pictures) return null; 
        
        return (
            <div>
                <ul>
                    {
                        pictures.map(picture => (
                            < EditorItemPage
                            picture={picture}
                            key={picture.id}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default EditorsChoice; 