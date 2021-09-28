import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            pictures: [] 
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ inputValue: e.target.value });
        const SearchInput = documnet.querySelector(".search-bar-result");
        SearchInput.style.visibility = "visible";
    }

    render() {

        return (
            <div className="search-wigit">
                <div className="search-bar-actual">
                    <input placeholder="Search InAFlash..." type="text" value={this.state.inputValue} onChange={this.handleSubmit} onBlur={() => { setTimeout(() => { this.setState({ inputValue: "" }) }, 100) }} />
                    <nav className="search-bar-result" >
                        {this.state.inputValue.length > 0 ? this.props.pictures.title.filter(picture => picture.title.includes(this.state.inputValue)).map(picture => {
                            return (
                                <li key={picture.id}>
                                    <Link to={`/pictures/${picture.id}`}>{picture.title}</Link>
                                </li>
                            )
                        }) : null}
                    </nav>

                </div>
            </div>
        )
    }

}

export default SearchBar; 