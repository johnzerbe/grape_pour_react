import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import HomeContainer from './HomeContainer';

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
      image: '',
      loading: true
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
      return parsedResponse;

    } catch (err) {
      console.log(err)
    }
  }
 
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} login={this.login} /> } />
          <Route exact path="/register" render={(props) => <Register {...props} register={this.register} /> } />
          <Route exact path="/home" render={(props) => <HomeContainer />} />
          <Route component={My404} />
        </Switch>
      </main>
    );
  }
}

export default App;
