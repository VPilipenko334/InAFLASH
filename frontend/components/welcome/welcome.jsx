import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getRandomImage } from '../generator/random_generator'
import scrollToTop from '../back_to_the_top_button/top'

export default () => (
    <div className="home">
        <div className="top-bar">
            <div className="inner-main-container"> 
                <h1 className="first-h1">Discover and share the world’s best photos</h1><br />
                    <p>Get inspired with incredible photos from diverse styles and genres around the world. 
                    We're not guided by fads—just great photography.
                    </p><br />
                <Link to="/signup" className="sign-up-button-home">Sign up</Link>
            </div>
        </div>

        <center><div className="about-container-head">
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
                </div></center><br />
                
                <div className="content-box">
                    <center><div className="photo-icon"></div></center>
                    <span className="random-photos"></span><br/>
                        <center><h3 id="photo-generator-text">Photo of the week:</h3></center><br/>
                        <br/> <p id="editors"> Our editors are always on the lookout for jaw dropping content for you 
                        to discover and stay inspired. Check back weekly to see what’s new. </p>
                        <div id="random-photo">

                        </div>
                        <center><button id="generator-button" onClick={getRandomImage}>Click for photo of the week</button></center><br /><br /><br />
                </div>

        <div className="content-box-two">
            <div className="smoller-content-box">
                <div className="community">
                    <div className="community-text">
                <h1 id="join-community">Join our community today</h1><br/>
                    <p id="love-pics">Do you love photography? Want to constantly stay inspired and be surrounded by millions of like-minded creators? Then sign-up today and get rewarded for your love of photography
                    </p>
                    </div>
                </div>
            </div>
    
        
            </div>
                <div>
                <footer>
                <center><button className="back-home-button" onClick={scrollToTop}>Scroll back to the top</button></center>
                        <div className="final-words">
                                InAFlash - 2021 <br/>
                                Created by: Veronika Pilipenko 
                        </div>
                    </footer>
                </div>
            </div>
)
