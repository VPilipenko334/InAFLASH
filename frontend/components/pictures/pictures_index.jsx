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

        console.log('hello, this is working!');
        console.log(pictures);
        console.log(users);

        return (
          'hello i am picture index'
        )
    }

}

export default PictureIndex