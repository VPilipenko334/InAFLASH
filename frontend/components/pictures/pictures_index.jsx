import React from "react";
import { Link } from 'react-router-dom';

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
          <div className="index-container">
              <h1>Welcome to the Picture Index!</h1>
                <div className="index-container">
                    Bugz be GONE!!!!!!!!!!!!!!!!
                </div>
          </div>
        )
    }

}

export default PictureIndex;