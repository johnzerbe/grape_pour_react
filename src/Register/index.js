import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            image: {}
        }
    }

    handleChange = (e) => {
        if(e.target.name !== 'image') {
            this.setState({[e.target.name]: e.target.value});
        } else {
            // file upload
            console.log(e.target.files[0])
            this.setState({image: e.target.files[0]});
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('file', this.state.image);
        data.append('username', this.state.username);
        data.append('password', this.state.password);

        console.log(data.entries(), '< THIS IS DATA')
        for (let pair of data.entries()) {
            console.log(pair[0] ,', ', pair[1])
        }

        const registerCall = this.props.register(data)

        registerCall.then((data) => {
            console.log(data)
            if(data.status.message === "Success") {
                this.props.history.push('/home')
            } else {
                console.log(data)
            }
        })
    }

    render() {
        return (
            <div>
            <h3>Register</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Create Username:
                        <input type="text" name="username" required="True" onChange={this.handleChange} /> 
                    </label>
                    <label>
                        Create Password:
                        <input type="text" name="password" onChange={this.handleChange} />
                    </label>
                    <label>
                        Upload Photo:
                        <input type="file" name="image" onChange={this.handleChange} />
                    </label>
                    <button type="submit" >Register</button>
                    <message>
                        Already a member? <Link to='/Login'>Login</Link>
                    </message>
                </form>
            </div>
        )
    }
}

export default Register;