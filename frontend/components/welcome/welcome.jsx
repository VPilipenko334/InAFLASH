import React from 'react';
import { Link, NavLink } from 'react-router-dom'

export default () => (
    <div className="home">
        <div className="top-bar">
            <div className="inner-main-container"> 
                <h1 className="first-h1">Discover and share the world's most gorgeous faries</h1><br />
                    <p>Get inspired to fly away with the most interesting, mythical and eccentric fairies.
                    Follow the sparkles at the end of their fingertips to embark on a mystical adventure.
                </p><br />
                <button><Link to="/signup" className="sign-up-button">Sign up</Link></button>
            </div>
        </div>

        <div className="about-container-head"> <br /><br />
            <h3 className="difference">What makes us different?</h3><br />
                <div className="body-container">
                    <span className="leaves"></span>

                    <h4 className="words">Grow as an artist</h4>
                        <p id="smollwords">Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and 
                            photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one.
                        </p><br />
                </div>
        </div>

        <div className="body-container">
                    <span className="pencil"></span>
                    <h4 className="words">Build Your Career</h4>
                        <p id="smollwords">Present yourself as a professional. Display your Services, create a Directory listing and get hired, 
                        showcase your articles, presets, videos, and more with Resources, and curate Galleries to highlight your work.
                        </p><br />
        </div>

        <div className="body-container">
                    <span className="stats"></span>
                     <h4 className="words">See how you're performing</h4>
                            <p id="smollwords">With Statistics and Pulse you get valuable insights into how your photos are performing and how you rank 
                            in comparison to other photographers in the community.
                            </p><br />  
        </div><br />
                
                <div className="content-box">
                    <span className="random-photos"></span><br/>
                        <center><h3 id="cool-photo">Coolest Photo of the week:</h3></center><br/>
            <center><button id="generator-button">Generate Photo Here</button></center><br /><br /><br />
                </div>

        <div className="content-box-two">
            <div className="smoller-content-box">
                <div className="community">
                <h3 id="join-community">Join our community today</h3>
                    <p id="love-pics">Do you love photography? Want to constantly stay inspired and be surrounded by millions of like-minded creators? Then sign-up today and get rewarded for your love of photography
                    </p>
                </div>
            </div>
    
        
            <div className="final">
                    <NavLink to="/">Back to Home</NavLink>
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
)
