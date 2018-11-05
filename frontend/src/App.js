import React, { Component } from 'react';
import './App.css';
import LoginBox from './components/accounts/loginBox';
import RegisterBox from './components/accounts/registerBox';
import LoginScreen from './components/accounts/loginScreen';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">  
        <LoginScreen /> 
      </div>
    );
  }
}

export default App;
