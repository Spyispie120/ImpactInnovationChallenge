import React, {Component} from 'react';
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    handle_login() {
        if (this.state.username === "recipient" && this.state.password === "password") {
            console.log("recipient signed in");
            this.props.history.push('/recipient');
        } else if (this.state.username === "donor" && this.state.password === "password") {
            console.log("donor signed in");
            this.props.history.push('/donor');
        } else if (this.state.username === "shelter" && this.state.password === "password") {
            console.log("shelter signed in");
            this.props.history.push('/home');
        } else {
            console.log("invalid username/password");
        }
    }

    update_username(value) {
        this.setState({ username: value });
    }

    update_password(value) {
        this.setState({ password: value });
    }

    render() {
        return (
            <div id="login">
                <h1>Login</h1>
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={ev => this.update_username(ev.target.value)}
                    />
                    <br/>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={ev => this.update_password(ev.target.value)}
                    />
                    <br/>
                    <button onClick={this.handle_login.bind(this)}>Sign In</button>
            </div>
        );
    }
}
