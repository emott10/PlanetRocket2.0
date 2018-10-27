import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginBox from './components/loginBox';
class App extends Component {
  render() {
    return (
      <div className="App">
       
        <LoginBox/>

      </div>
    );
  }
}

export default App;
