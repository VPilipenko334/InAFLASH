import React from 'react';
import { Link, NavLink } from 'react-router-dom'

export default () => (
    <div className="home">
        <div className="top-bar">
            <div className="inner-main-container">
                <h2>Discover and share the world's most gorgeous faries</h2>
                <p>Get inspired to fly away with the most interesting, mythical and eccentric fairies.
                    Follow the sparkles at the end of their fingertips to embark on a mystical adventure.
                </p>
                <button><Link to="/signup" className="sign-up-link">Sign up</Link></button>
            </div>
        </div>

        <div className="about-container-head">
            <h3>What makes us different?</h3> 
                <div className="body-container">
                    <span className="leaves"></span>
                    <h4>Grow as an artist</h4>
                        <p>Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and 
                            photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one.
                        </p>
                </div>
        </div>

        <div className="body-container">
                    <span className="pencil"></span>
                    <h4>Build Your Career</h4>
                        <p>Present yourself as a professional. Display your Services, create a Directory listing and get hired, 
                        showcase your articles, presets, videos, and more with Resources, and curate Galleries to highlight your work.
                        </p>
        </div>

        <div className="body-container">
                    <span className="stats"></span>
                        <h4>See how you're performing</h4>
                            <p>With Statistics and Pulse you get valuable insights into how your photos are performing and how you rank 
                            in comparison to other photographers in the community.
                            </p>
        </div>

        <div className="fairy-generater-container">
                <div className="content-box">
                    <span className="random-fairies"></span>
                        <h4>Coolest Fairy of the Week: </h4>
                           <button>Generate Fairy Here</button>
                </div>
        </div>

        <div className="content-box-two">
            <div className="smoller-content-box">
                <h3>Join our community today</h3>
                    <p>Do you love photography? Want to constantly stay inspired and be surrounded by millions of like-minded creators? Then sign-up today and get rewarded for your love of photography
                    </p>
                <button><Link to="/signup" className="sign-up-link">Sign up</Link></button>
            </div>
    
        <div className="about-me">
                <h3>Veronika, the fairy that made this, can be found here:</h3>
                <div className="social-links">
                    <span className="veronikafairy"></span>
                    <ul>
                        <li>
                            <i className="social-link-div"></i>
                            <a href="https://github.com/VPilipenko334" target="_blank">Github</a>
                        </li>
                        <li>
                            <i className="social-link"></i>
                            <a href="https://linkedin.com/in/veronikapilipenko" target="_blank">LinkedIn</a>
                        </li>
                    </ul>
                </div>
                <div className="final">
                    <h1>Community</h1>
                    <ul>
                        <li>
                            <NavLink to="/">Back to Home</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <footer>
                    <div>
                        InAFlash - 2021
                    </div>
                </footer>
            </div>
        </div>
    </div>
)
