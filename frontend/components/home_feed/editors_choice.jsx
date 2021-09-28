import React from "react";

class EditorsChoice extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { pictures } = this.props; 
        if (!pictures) return null; 
        
        console.log(pictures); 

        return (
            <div>
                <ul>
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
        )
    }
}

export default EditorsChoice; 