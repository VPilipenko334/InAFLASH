import React from "react";
import PictureRenderIndex from "../pictures/pictures_index_container";
import EditorsItemPictures from "../home_feed/editors_choice_container"
import { Link } from 'react-router-dom'

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
        
        // console.log(pictures[0]); 
        // console.log(pictures.id);
        // console.log(pictures.picture)

        return (
            <div>
                <ul>
                    {/* {pictures.map(picture => (
                     picture={picture}
                    ))} */}

                    {/* <Link to={`/pictures/${picture.id}`} className="picture-render-link"> */}
                        {/* <img className="picture-render" height="300" width="300" src={pictures.picture} /> */}
                    {/* </Link> */}

                    {/* {
                        pictures.map(picture => (
                            <EditorsItemPictures
                                picture={picture}
                                key={picture.id}
                            />
                        ))
                    } */}
                    < PictureRenderIndex />
                    {/* <EditorsItemPictures />  */}
                    {/* hello */}
                </ul>
            </div>
        )
    }
}

export default EditorsChoice; 