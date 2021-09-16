import React from "react";
import { Link } from 'react-router-dom';

class PictureIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchPictures();
        this.props.fetchUsers(); 
    }

    render() {
        // debugger
        const { pictures } = this.props;
        // if (!pictures) return null;

        // debugger
        const { users } = this.props; 
        // if (!users) return null; 

        // debugger
        // console.log('hello, this is working!');

        // debugger
        console.log(pictures);

        // debugger 
        console.log(users);

        return (
          <div className="index-container">
              <h1>Welcome to the Picture Index!</h1>
                <div className="index-container">
                    this page is under construction  hallo frenz
                </div>
          </div>
        )
    }

}

export default PictureIndex;