import React from 'react'; 
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            title: [],
            users: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ inputValue: e.target.value });
        const searchBar = document.querySelector(".search-bar-result");
        searchBar.style.visibility = "visible";
    }


    render() {
        // if (!this.props.pictures)
        // return null;

        if (!this.props.users)
        return null; 

        return (
            <div>
                <div className="search-bar-wigit">
                        <div className="search-bar"> 
                        <input placeholder="Search InAFlash..." type="text" value={this.state.inputValue} onChange={this.handleSubmit} onBlur={() => { setTimeout(() => { this.setState({ inputValue: "" }) }, 100) }} />

                        <nav className="search-bar-result">
                            {this.state.inputValue.length > 0 ? this.props.pictures.filter(picture => picture.title.includes(this.state.inputValue)).map(picture=> {
                                    return (
                                        <li key={picture.title} >
                                            <Link to={`/pictures/${picture.id}`}>{picture.title}</Link>
                  
                                            </li>
                                    )
                                }) : null }
                         </nav>
                            {/* <nav className="search-bar-result"> */}
                            {/* {this.state.inputValue.length > 0 ? this.props.users.filter(user => user.username.includes(this.state.inputValue)).map(user=> {
                                    return (
                                        <li key={user.id} >
                                            <Link to={`/pictures/${user.id}`}>{user.username}</Link>
                                        </li>
                                    )
                                }) : null }
                        </nav> */}
                        </div>
                </div>
            </div>
        )
    }

}

export default SearchBar; 