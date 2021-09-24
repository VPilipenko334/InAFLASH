import React from 'react'; 
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            // title: [],
            pictures: [],
            // users: []
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
        // const { title, pictures } = this.props; 
        
        // if (!this.props.pictures.title)
        // return null; 

        if (!this.props.pictures)
        return null;

        return (
            <div>
                <div className="search-bar-wigit">
                        <div className="search-bar"> 
                            <input placeholder="Search InAFlash..." type="text" value={this.state.search} onChange={this.handleSubmit} onBlur={() => { setTimeout(() => { this.setState({ search: "" }) }, 100) }} />
                                {this.state.search.length > 0 ? this.props.pictures.filter(title => props.pictures.title.includes(this.state.search)).map(title=> {
                                    return (
                                        <li key={props.picture.title} >
                                            <Link to={`/pictures/${pictureId}`}>{props.picture.title}</Link>
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