import React, { Component } from 'react';
import './App.css';
import LoginBox from './components/accounts/loginBox';
import RegisterBox from './components/accounts/registerBox';

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <RegisterBox/>

      </div>
    );
  }
}

export default App;
