import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const login = this.props.login(this.state);

        login.then((data) => {
            if(data.status.message === "Success") {
                this.props.history.push('/home')
            } else {
                console.log(data, this.props)
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type="text" name="username" onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" onChange={this.handleChange} />
                    </label>
                    <button type='submit' >Login</button>
                    <message>
                        Not a member? <Link to='/register'>Register</Link>
                    </message>
                </form>
            </div>
        )
    }
}

export default Login;