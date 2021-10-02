import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getRandomImage } from '../generator/random_generator'
import scrollToTop from '../back_to_the_top_button/top'

export default () => (
    <div className="home">
        <div className="top-bar">
            <div className="inner-main-container"> 
                <h1 className="first-h1">Discover and share the world’s best photos</h1><br />
                    <p className="p-text">Get inspired with incredible photos from diverse styles and genres around the world. 
                    We're not guided by fads—just great photography.
                    </p><br />
                <Link to="/signup" className="sign-up-button-home">Sign up</Link>
            </div>
        </div>

            <h3 className="difference">What makes us different?</h3><br /><br />
                <div className="about-container-head">


                        <div className="body-container">
                            <span className="leaves"></span>
                            <h4 className="words">Grow as an artist</h4>
                                <p id="smollwords">Get immediate exposure with your first upload. Our Pulse algorithm surfaces new photographs and 
                                    photographers, ensuring your photos are seen by the community so you receive valuable feedback on day one.
                                </p><br />
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
                        </div>
            </div>
           
            <div className="random-generator-container">
                <center><div className="photo-icon"></div></center><br/>
                <center><h1>Photo of the week:</h1></center><br />
                <p id="editors"> Our editors are always on the lookout for jaw dropping content for you
                    to discover and stay inspired. Check back weekly to see what’s new. </p>
                <div id="random-photo">

                </div>
                <center><button id="generator-button" onClick={getRandomImage}>Click for photo of the week</button></center>
            </div>


        <div className="content-box-two">
            <div className="smoller-content-box">
                <div className="community">
                    <div className="community-text">
                <h1 id="join-community">Join our community today</h1><br/>
                    <p id="love-pics">Do you love photography? Want to constantly stay inspired and be surrounded by millions of like-minded creators? Then sign-up today and get rewarded for your love of photography</p>
                        <Link to="/signup" className="sign-up-button-home-bottom">Sign up</Link>
                    </div>
                </div>
            </div>
    
        
        </div>
            <div className="footer-dark">
            <center><button onClick={scrollToTop} id="back-to-the-top-button">Scroll to the top</button></center>
                
                <footer>
                <div className="footer-dark">
                    <footer>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-md-3 item">
                                    <h3>Projects</h3>
                                    <ul>
                                        <li><a href="https://the-greenmarket.herokuapp.com/#/">GreenMarket</a></li>
                                        <li><a href="https://vpilipenko334.github.io/coffeehouse-catch-project/">CoffeeHouseCatch</a></li>
                                        <li><a href="https://vpilipenko334.github.io/portfolio-website/">Portfolio</a></li>
                                        <li><a href="https://vpilipenko334.github.io/resume-website/">Resume</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <h3>InAFlash</h3>
                                    <p>
                                        This website is a clone of the photo-sharing website 500px
                                    </p>
                            
                                </div>
                                <div className="col-md-6 item text">
                                    <h3>About the Creator</h3>
                                    <p>
                                        My name is Veronika Pilipenko and I am a fullstack developer based in New York City.
                                        I really enjoy working working with frontend frameworks such as React, and backend frameworks such as Rails.
                                        My favorite languages to code in are JavaScript and Ruby.
                                    </p>
                                </div>
                                <div className="col item social">
                                    <a href="https://vpilipenko334.github.io/portfolio-website/"><i className="ionicons ion-ios-contact"></i></a>
                                    <a href="https://www.linkedin.com/in/veronikapilipenko/"><i className="icon ion-social-linkedin"></i></a>
                                    <a href="https://github.com/VPilipenko334"><i className="icon ion-social-github"></i></a>
                                    </div>
                            </div>
                            <p className="copyright">InAFlash | Veronika Pilipenko © 2021</p>
                        </div>
                    </footer>
                </div>
                </footer>
            </div>
    </div>
)