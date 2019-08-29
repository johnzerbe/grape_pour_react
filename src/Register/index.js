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


    onChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })

    }
    onSubmit = (e, props) => {
         e.preventDefault();
        this.props.register(this.state)
          console.log(this.state, '<-- this.state')
          this.props.history.push('/home')
    }

    render(props) {
        
      
        return (
            <div className="loginall">
                   <h2 className="banner">Welcome to OnTap!</h2>  
            <div className="wrapper">
            <form className="form-signin" onSubmit={this.onSubmit}>       
              <h2 className="form-signin-heading">register</h2>
              <input type="text" className="form-control" value={this.state.username} name="username" onChange={this.onChange} placeholder="Username" required="True"  /> 
              <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password" />
                <Button color="warning" className="btn login-button btn-primary btn-block" type="submit" action="/home">Register</Button> 
                <div className="messageclass">
                    Already a member? <Link className="reg" to='/'>Login</Link>
                </div>  
            </form>
            </div>
            </div>

          
        )
    }
}

export default Register;   


        // const data = new FormData();
        // data.append('username', this.state.username);
        // data.append('password', this.state.password);

        // console.log(data.entries(), '< THIS IS DATA')
        // for (let pair of data.entries()) {
        //     console.log(pair[0] ,', ', pair[1])
        // }

        // const registerCall = this.props.register(data)

        // registerCall.then((data) => {
        //     console.log(data)
        //     if(data.status.message === "Success") {
        //         this.props.history.push('/home')
        //     } else {
        //         console.log(data)
        //     }
        // })

