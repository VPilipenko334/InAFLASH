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
        // const { users } = this.props ;
        const { pictures } = this.props; 

        // console.log(users);
        // console.log(this.props);
        // console.log(users)
        // console.log(pictures)
        // console.log(this.state);
        // console.log(users.id);
        // console.log(pictures);

        // if (!users) 
        // return null;

        // if (!pictures); 
        // return null; 

        return (
            <div className="search-bar-outer">
                    <input placeholder="Search InAFlash..." type="text" className="search-bar" value={this.state.searchValue} onChange={this.handleChange} onBlur={() => { setTimeout(() => { this.setState({ searchValue: ""})}, 100) }} />
                        {/* <nav className="search-bar"> */}
                            {this.state.searchValue.length > 0 ? pictures.filter(picture => picture.title.toLowerCase().includes(this.state.searchValue.toLowerCase())).map(picture => {
                                return (
                                    <ul key={picture.id}>
                                        <Link to={`/pictures/${picture.id}`}>{picture.title}</Link>
                                    </ul>
                                )
                            }) : null }
                </div>
        )

    }
}
export default SearchBar; 