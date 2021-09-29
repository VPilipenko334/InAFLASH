import React from 'react';
import { Link } from 'react-router-dom';
import UploadPicture from '../pictures/upload_picture';
// import PictureIndexContainer from '../pictures/pictures_index_container';
import SearchBar from '../search_bar/search_bar_container';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="main-top-container">
      <nav className="login-signup-links">
        <header className="header-container">
          <div className="nav-bar-things">
            <div className="socials">
              <Link to="/" className="logo">InAFlash</Link>
              <a href="https://github.com/VPilipenko334" className="git">      Github      </a>
              <a href="https://linkedin.com/in/veronikapilipenko" className="linkedin">LinkedIn</a>
              <a href="https://angel.co/u/veronika-pilipenko" className="linkedin">AngelList</a> 
            </div>
            
            </div>
          <div className="more-nav-right">
            < SearchBar />
              <Link className="log-in-link" to="/login">Log in</Link>
              <Link className="sign-up-button-form" to="/signup">Sign up</Link>
              </div>
        </header>
      </nav>
    </div>
  );

  const personalGreeting = () => (
    <div className="header-group">
      <h2 className="header-name">welcome, {currentUser.username}!</h2>
        < SearchBar /> 

        <div class="dropdown">
          <button class="dropbtn">Dropdown</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <img src="user.png" className="user-man"></img>
        <img src="mail.png" className="icons"></img>
        <img src="bell.png" className="icons"></img>
        <Link to="/upload" className="greeting-buttons">Upload</Link>
        <Link to="/pictures" className="greeting-buttons">Pictures</Link>
        <Link to="/home" className="greeting-buttons">Home</Link>
        <button className="homepage-header-button" onClick={logout}>Logout</button>
      </div>
    // </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;