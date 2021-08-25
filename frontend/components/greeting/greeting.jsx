import React from 'react';
import { Link } from 'react-router-dom';
import UploadPicture from '../pictures/upload_picture';
import PictureIndexContainer from '../pictures/pictures_index_container';


const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="main-top-container">
      <nav className="login-signup-links">
        <header className="header-container">
          <div className="nav-bar-things">
            <Link to="/" className="logo">InAFlash</Link>
            <a href="https://github.com/VPilipenko334" className="git">      Github      </a>
            <a href="https://linkedin.com/in/veronikapilipenko" className="linkedin">LinkedIn</a>
            <a href="https://angel.co/u/veronika-pilipenko" className="linkedin">AngelList</a>
            <br />
            </div>
          <div className="more-nav-right">
            <input type="text" placeholder="Search InAFlash..." className="search-bar" />
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
        <div className="buttons-on-homepage">
        <Link to="/upload" className="homepage-header-button">Upload</Link>
        <Link to="/userId" className="homepage-header-button">User HomePage</Link>
        <button className="homepage-header-button" onClick={logout}>Log Out</button>
      </div>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;