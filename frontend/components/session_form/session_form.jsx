import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    demoLogin(e) {
        e.preventDefault();
        const demoUser = {
            username: "mikem",
            password: "teslaspacerocket",
        };

        let { username, password, } = demoUser;
        let interval = 300;
        let login = () => {
            this.props.processForm(this.state);
            this.props.history.push("/home")
        };
        if (this.state.username !== username) {
            let inputUsername = setInterval(() => {
                if (this.state.username !== username) {
                    let tempUsername = username.slice(0, this.state.username.length + 1);
                    this.setState({ username: username });
                } else {
                    clearInterval(inputUsername);
                    fillPassword();
                }
            }, interval);
        }
        let fillPassword = () => {
            let inputPassword = setInterval(() => {
                if (this.state.password !== password) {
                    let tempPassword = password.slice(0, this.state.password.length + 1);
                    this.setState({ password: password });
                } else {
                    clearInterval(inputPassword);
                    login();
                }
            }, interval);
        };
    }

    // demoLogin(e) {
    //     e.preventDefault();
    //     this.props.login({ username: 'mikem', password: 'teslaspacerocket'})
    // }


    render() {
        return (
            <div className="full">
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <h3>Welcome to InAFlash!</h3>
                            <br />
                        <div className="login-form">
                            <br />
                            <label className="username-password">Username:
                                <br />
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <label className="username-password">Password: 
                                <br />
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <input className="session-submit" type="submit" value={this.props.formType} /><br/>
                            <button className="demo-user-button" onClick={this.demoLogin}>Demo User</button>
                        </div>
                        <br />
                        <div className="login-or-signup-text">
                            Please {this.props.formType} or {this.props.navLink}
                        </div>
                    </form>
                </div>
        </div>
        );
    }
}

export default SessionForm;
