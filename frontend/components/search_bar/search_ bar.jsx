import React from 'react'; 
import { Link } from 'react-router-dom'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.setState = {
            searchValue: "",
            title: "",
            users: []
        };

        this.handleChange = this.handleChange.bind(this); 
    }

    handleChange(e) {
        e.preventDefault(); 
        this.setState({ searchValue: e.target.value });
        const searchWidget = document.querySelector(".search-bar");
        searchWidget.style.visibility = "visible";
    }

    render() {
        const {users} = this.props ;
        const { pictures } = this.props; 

        console.log(users);
        // console.log(pictures);

        if (!users) 
        return null;

        if (!pictures); 
        return null; 

        
    }
        // return (
        //     hello 
        // )
}

export default SearchBar; 