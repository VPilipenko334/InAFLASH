import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import SessionForm from './session_form/session_form'
import LogInFormContainer from './session_form/login_form_container';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import welcome from './welcome/welcome';
//search bar
// import PictureIndex from './pictures/pictures_index_container';
import UploadPicture from './pictures/upload_picture';
import ShowPicture from './pictures/pictures_show';
import HomePage from './home/home';
import home_container from './home/home_container';

const App = () => (
    <div>
        <div className="header-container">
            <div className="links">
                <Link to="/"><h1>InAFlash</h1></Link>

                <input type="text" placeholder="Search" />
                <GreetingContainer />
                {/* <PictureIndexContainer /> */}
            </div>

            <div className="login-links">
                <Switch>
                        <Route exact path="/" component={welcome} />
                        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
                        <AuthRoute exact path="/login" component={LogInFormContainer} />
                        {/* <p> testing </p>  */}
                        <Route exact path="/homepage" component={HomePage} />
                        <Route exact path="/upload" component={UploadPicture} />
                        <Route exact path="/pictures/:pictureId" component={ShowPicture} />
                        {/* <ProtectedRoute path="/profile/:userId" component={ProfileContainer} />
                        <ProtectedRoute path="/users/:userId" component={UserContainer} /> */}
                </Switch>
            </div>
        </div>
    </div>
);

export default App;