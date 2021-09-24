import React from 'react'; 
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            // title: [],
            users: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ search: e.target.value});
        const searchBar = document.querySelector(".search-bar");
        searchBar.style.visibility = "visible";
    }


    render() {
        // const { title, users } = this.props; 
        
        // if (!this.props.pictures.title)
        // return null; 

        if (!this.props.users)
        return null;

        return (
            <div>
                <div className="search-bar-wigit">
                        <div className="search-bar"> 
                            <input placeholder="Search InAFlash..." type="text" value={this.state.search} onChange={this.handleSubmit} onBlur={() => { setTimeout(() => { this.setState({ inputValue: "" }) }, 100) }} />
                                {this.state.search.length > 0 ? this.props.users.filter(user => user.username.includes(this.state.search)).map(user => {
                                    return (
                                        <li key={user.id} >
                                            <Link to={`/users/${user.id}`}>{user.username}</Link>
                                        </li>
                                    )
                                }) : null }
                        </div>
                </div>
            </div>
        )
    }

}

export default SearchBar; 