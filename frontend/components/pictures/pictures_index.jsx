import React from "react";
import { Link } from 'react-router-dom';
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
        // if (!pictures) return null;

        const { users } = this.props; 
        // if (!users) return null; 

        console.log(pictures);
        console.log(users);

        return (
          <div className="index-container">
             <ul>
                 {
                     users.map(user => (
                        <PictureIndexItem
                        user={user}
                        key={user.id}
                        />
                     ))
                 }

             </ul>
          </div>
        )
    }
}

export default PictureIndex;