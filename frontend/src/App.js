import React, { Component } from 'react';
import './App.css';
import LoginBox from './components/accounts/loginBox';
import RegisterBox from './components/accounts/registerBox';
//import RegisterButton from './components/accounts/registerButton';
//import LoginButton from './components/accounts/loginButton';
import LoginScreen from './components/accounts/loginScreen';
class App extends Component {

  render() {
    return (
      <div className="App">  
        <LoginScreen /> 
      </div>
    );
  }
}

export default App;
