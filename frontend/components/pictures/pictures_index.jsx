import React from "react";
import { Link } from 'react-router-dom';
import PictureItemPage from "./picture_item_page";

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


        // console.log('hello, this is working!');
        console.log(pictures);
        // console.log(users);

        return (
          <div className="index-container">
              <h1>Welcome to the Picture Index!</h1>
                <div className="index-container">
                    {/* <ul className="index-container-list">
                        {pictures.map((picture, idx) => (
                            <PictureItemPage key={idx} picture={picture} />
                        ))}
                    </ul> */}
                    this page is under construction 
                </div>
          </div>
        )
    }

}

export default PictureIndex;