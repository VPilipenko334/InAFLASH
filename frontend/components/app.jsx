import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import welcome from './welcome/welcome';
import PicturesShowContainer from './pictures/pictures_show_container';
import UploadPictureContainer from './pictures/upload_picture_container';
import PicturesIndexContainer from './pictures/pictures_index_container'
import HomeFeed from './home_feed/home_feed'

const App = () => (
    <div>
        <div className="login-links">
            <GreetingContainer />
            <Switch>
                <Route exact path="/" component={welcome} />
                <AuthRoute exact path="/signup" component={SignUpFormContainer} />
                <AuthRoute exact path="/login" component={LogInFormContainer} />
                <ProtectedRoute exact path='/home' component={HomeFeed} />
                <ProtectedRoute exact path='/pictures' component={PicturesIndexContainer} />
                <ProtectedRoute exact path="/upload" component={UploadPictureContainer} />
                <ProtectedRoute exact path="/pictures/:pictureId" component={PicturesShowContainer} />

            </Switch>
        </div>
    </div>

);

export default App;