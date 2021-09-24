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
            <div className="footer-dark">
            <center><button onClick={scrollToTop} id="back-to-the-top-button">Scroll to the top</button></center>
                
                <footer>
                <div class="footer-dark">
                    <footer>
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-6 col-md-3 item">
                                    <h3>Projects</h3>
                                    <ul>
                                        <li><a href="https://the-greenmarket.herokuapp.com/#/">GreenMarket</a></li>
                                        <li><a href="https://vpilipenko334.github.io/coffeehouse-catch-project/">CoffeeHouseCatch</a></li>
                                        <li><a href="https://vpilipenko334.github.io/portfolio-website/">Portfolio</a></li>
                                        <li><a href="https://vpilipenko334.github.io/resume-website/">Resume</a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-6 col-md-3 item">
                                    <h3>About</h3>
                                    <p>Hi My name is Veronika. </p>
                                </div>
                                <div class="col-md-6 item text">
                                    <h3>InAFlash summary</h3>
                                    <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                                </div>
                                <div class="col item social">
                                    <a href="https://vpilipenko334.github.io/portfolio-website/"><i class="ionicons ion-ios-contact"></i></a>
                                    <a href="https://www.linkedin.com/in/veronikapilipenko/"><i class="icon ion-social-linkedin"></i></a>
                                    <a href="https://github.com/VPilipenko334"><i class="icon ion-social-github"></i></a>
                                    </div>
                            </div>
                            <p class="copyright">InAFlash | Veronika Pilipenko © 2021</p>
                        </div>
                    </footer>
                </div>
                </footer>
            </div>
    </div>
)

                       
                        // <div className="container">
                        //     <div className="row">
                        //         <div className="about-me-div">
                        //         <center><p>This website is a clone of the photo-sharing website 500px. </p></center><br /><br />
                        //         </div>
                        //         <div className="col item social"><a href="#">
                        //             <i className="icon ion-social-facebook"></i></a>
                        //             <a href="https://github.com/VPilipenko334"><i className="icon ion-social-twitter"></i></a>
                        //             <a href="https://www.linkedin.com/in/veronikapilipenko"><i className="icon ion-social-snapchat"></i></a>
                        //             <a href="https://angel.co/u/veronika-pilipenko"><i className="icon ion-social-instagram"></i></a></div>
                        //         </div>
                        //     <p className="copyright">InAFlash © 2021</p>
                        // </div>