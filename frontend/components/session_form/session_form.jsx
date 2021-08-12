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

    demoLogin(e) {
        e.preventDefault();
        const demoUser = {
            username: "mikem",
            password: "teslaspacerocket",
        };

        let { username, password, } = demoUser;
        let interval = 3000;
        let login = () => {
            this.props.processForm(this.state);
            this.props.history.push("/")
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
                        Welcome to InAFlash!
                        <br />
                        <div className="login-form">
                            <br />
                            <label>Username:
                                <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <label>Password:
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                />
                            </label>
                            <br />
                            <input className="session-submit" type="submit" value={this.props.formType} /><br/>
                            <button onClick={this.demoLogin}>Demo User</button>
                        </div>
                        <br />
                    Please {this.props.formType} or {this.props.navLink}
                    </form>
                </div>
        </div>
        );
    }
}

export default SessionForm;
