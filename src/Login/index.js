import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import '../App.css';

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
            
            <div className="loginall">
                <h2 class="banner">Welcome to OnTap!</h2>  
            <div class="wrapper">
            <form onSubmit={this.handleSubmit} class="form-signin">   
              <h2 class="form-signin-heading">login</h2>
              <input type="text" class="form-control" name="username" placeholder="Username"  onChange={this.handleChange} />
              <input type="password" class="form-control" name="password" placeholder="Password" onChange={this.handleChange} />
                <Button color="warning" className="btn login-button btn-primary btn-block" type="submit">Login</Button> 
                <message className="messageclass">
                    Not a member? <Link className="reg" to='/register'>Register</Link>
                </message>  
            </form>
            </div>
            </div>
          
            
        )
    }
}

export default Login;




