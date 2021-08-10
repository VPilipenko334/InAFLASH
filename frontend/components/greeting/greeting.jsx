import React from 'react';
import { Link } from 'react-router-dom';
import UploadPicture from '../pictures/upload_picture';
import PictureIndexContainer from '../pictures/pictures_index_container';


const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login    </Link>
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <div className="header-group">
      <h2 className="header-name">Welcome, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
      
      <button><Link to="/upload" className="upload-photo">Upload</Link></button>
      <button><Link to="/userId" className="user-id">User HomePage</Link></button>
      
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;