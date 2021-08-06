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
import search_Bar from './search_bar/search_ bar';
import PictureIndexContainer from './pictures/pictures_index_container'

const App = () => (
    <div>
        <div className="header-container">
            <div className="links">
                <Link to="/"><h1>InAFlash</h1></Link>
            </div>

                <input type="text" placeholder="Search.."/>
                <GreetingContainer />
       

            <div className="login-links">
                <Switch>
                        <AuthRoute exact path="/" component={welcome} />
                        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
                        <AuthRoute exact path="/login" component={LogInFormContainer} />
                </Switch>
            </div>

            {/* <PictureIndexContainer /> */}
        </div>
    </div>
);

export default App;