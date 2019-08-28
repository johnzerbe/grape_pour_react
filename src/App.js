import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import HomeContainer from './HomeContainer';
import User from './User';
import DeleteUser from './DeleteUser';


const My404 = () => {
  return (
    <div>
      Whoops! Looks like you're lost!
    </div>
  )
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      id: '',
      loading: true,
      comments: ''
    }
  }

  login = async (loginInfo) => {
    try {
      const loginResponse = await fetch('http://localhost:8000/user/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await loginResponse.json();

      this.setState(() => {
        return {
          ...parsedResponse.data,
          loading: false
        }
      })

      return parsedResponse

    } catch (err) {
      console.log(err)
    }
  }

  register = async (data) => {
    console.log(data, '<-- data in register route')
    try {
      const registerResponse = await fetch('http://localhost:8000/user/register', {
        method: 'POST',
        credentials: 'include',
        body: data,
        headers: {
          'enctype': 'multipart/form-data'
        }
      })

      const parsedResponse = await registerResponse.json();

      console.log(parsedResponse, '< parsedResponse')

      this.setState({
        ...parsedResponse.data,
        loading: false
      })
      console.log(this.state);
      return parsedResponse;
      
    } catch (err) {
      console.log(err)
    }
  }

  editUser = async (dataFromUser) => {
    try{
       console.log(dataFromUser, '<-- dataFromUser in App.js')
    const submitComment = await fetch('http://localhost:8000/user/' + this.state.id, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(dataFromUser),
      headers: {
        'Content-Type': 'application/json'
        }
    })
    // console.log(await submitComment);
    const parsedEditResponse = await submitComment.json();
    console.log(parsedEditResponse, "<-- parsedEditResponse in editUser")
    this.setState({
      comments: dataFromUser.comments
    })
    return parsedEditResponse
  }catch(err){
    return err
  } 
  }

  deleteUser=async ()=>{
    console.log(this.state)
    const userToDelete = this.state.id
    console.log(this.state.id, ' deleteUser ID')
    try {
      const deleteUser = await fetch('http://localhost:8000/user/' + userToDelete, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if(deleteUser.status !== 200){
        throw Error('Something happened on delete')
      }
      const deleteUserJson = await deleteUser.json();
      console.log(deleteUserJson)
      this.state({
        id: this.state.id.filter(id => id.id !== id)
      })
    } catch(err){
      console.log(err);
      return err
    }
  }

 
  render() {
    return (
      <main>
        
        <User editUser={this.editUser} fullState={this.state}/> 
        
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} login={this.login} /> } />
          <Route exact path="/register" render={(props) => <Register {...props} register={this.register} /> } />
          <Route exact path="/home" render={(props) => <HomeContainer {...props} userId={this.state.id} comments={this.state.comments}/> } />
          <Route component={My404} /> 
          
        </Switch>
        <div className="delete">
        <DeleteUser className="delete-btn" deleteUser={this.deleteUser}/>

        </div>
      </main>
    );
  }
}

export default App;
