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
import UploadPictureContainer from './pictures/upload_picture_container.js';
import ShowPictureContainer from './pictures/pictures_show_container.js';

const App = () => (
    <div>
        <div className="header-container">
            <div className="links">
                <Link to="/"><h1>InAFlash</h1></Link>
            </div>

                <input type="text" placeholder="Search.."/>
                <GreetingContainer />
                {/* <PictureIndexContainer /> */}

            <div className="login-links">
                <Switch>
                        <AuthRoute exact path="/" component={welcome} />
                        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
                        <AuthRoute exact path="/login" component={LogInFormContainer} />

                        <ProtectedRoute exact path="/upload" component={UploadPictureContainer} />
                        <Route exact path="/pictures/:pictureId" component={ShowPictureContainer} />
                        {/* <ProtectedRoute path="/profile/:userId" component={ProfileContainer} />
                        <ProtectedRoute path="/users/:userId" component={UserContainer} /> */}
                </Switch>
            </div>
        </div>
    </div>
);

export default App;