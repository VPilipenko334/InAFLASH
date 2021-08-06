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
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';
import welcome from './welcome/welcome';

const App = () => (
    <div className="top-container">
        <Link to="/"><h1>InAFlash</h1></Link>
        <GreetingContainer />
            <div className="login">
                <AuthRoute exact path="/" component={welcome} />
                <AuthRoute exact path="/login" component={LogInFormContainer} />
                <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            </div>
    </div>
);

export default App;