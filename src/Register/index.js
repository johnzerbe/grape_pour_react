import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button} from 'reactstrap';



class Register extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        }
    }



    handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
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
            <div className="loginall">
                   <h2 class="banner">Welcome to OnTap!</h2>  
            <div class="wrapper">
            <form onSubmit={this.handleSubmit} class="form-signin">       
              <h2 class="form-signin-heading">register</h2>
              <input type="text" class="form-control" name="username" placeholder="Username" required="True" onChange={this.handleChange} /> 
              <input type="text" class="form-control" name="password" placeholder="Password" onChange={this.handleChange} />
                <Button color="warning" className="btn login-button btn-primary btn-block" type="submit">Register</Button> 
                <message className="messageclass">
                    Already a member? <Link className="reg" to='/'>Login</Link>
                </message>  
            </form>
            </div>
            </div>

          
        )
    }
}

export default Register;   


