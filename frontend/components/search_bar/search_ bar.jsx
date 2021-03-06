import React from 'react';
import { Link } from 'react-router-dom'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: "",
            pictures: [],
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
        const { pictures } = this.props;

        if (!pictures) return null;

        return (
            <div className="dropdown-search">
                <input placeholder="Search InAFlash..." type="text" className="search-bar"
                    value={this.state.searchValue} onChange={this.handleChange} onBlur={() => { setTimeout(() => { this.setState({ searchValue: "" }) }, 100) }} />
                {this.state.searchValue.length > 0 ? pictures.filter(picture => picture.title.toLowerCase().includes(this.state.searchValue.toLowerCase())).map(picture => {
                    return (
                        <ul key={picture.id}>
                            <Link to={`/pictures/${picture.id}`}>{picture.title}</Link>
                        </ul>
                    )
                }) : null}
            </div>
        )

    }
}
export default SearchBar; 
