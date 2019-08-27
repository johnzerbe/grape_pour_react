import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      comments: '',
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {

    this.setState(
    {
      modal: !this.state.modal
    });
  }
  onChange=(e)=>{
    e.preventDefault();
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  onSubmit=(e)=>{
    console.log(this.state, "<-- this.state in User")
    e.preventDefault();
    this.props.editUser(this.state);
  }

  render() {
    return (
      <div>
        <Button color="danger" className="float-right brew-btn" onClick={this.toggle}>My Breweries</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} className="modalheader">Username: {this.props.fullState.username}</ModalHeader>
          <ModalBody> This is a place for you to take notes, write down breweries you enjoyed, or anything else you can think of.</ModalBody>
          <ModalBody>
              <form onSubmit={this.onSubmit}>
                  <textarea rows="23" cols="40" type="text" name="comments" value={this.state.comments} onChange={this.onChange}></textarea> <br/>

                  <input className="button" type='submit' value='submit'/>
              </form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default User;

