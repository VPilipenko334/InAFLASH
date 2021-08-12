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
            <br />
            </div>
          <div className="more-nav-right">
            <input type="text" placeholder="Search InAFlash..." className="search-bar" />

              <Link className="log-in-link" to="/login">Login    </Link>
              <Link className="sign-up-button-form" to="/signup">Sign up</Link>
              </div>
        </header>
      </nav>
    </div>
  );
  const personalGreeting = () => (
    <div className="header-group">
      <h2 className="header-name">Welcome, {currentUser.username}!</h2>
        <div className="buttons-on-homepage">
      <button className="header-button" onClick={logout}>Log Out</button>
      
      <button><Link to="/upload" className="upload-photo">Upload</Link></button>
      <button><Link to="/userId" className="user-id">User HomePage</Link></button>
      </div>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;