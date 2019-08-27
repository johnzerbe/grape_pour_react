import React, {Component} from 'react';
import { Nav, Button } from 'reactstrap';
import App from '../App.css';

class DeleteUser extends Component {
    render(){
        return(

            
          <Button href='/' onClick={this.props.deleteUser}>Delete Account</Button> 
  
  )
}
}

export default DeleteUser;