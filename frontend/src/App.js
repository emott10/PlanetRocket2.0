import React, { Component } from 'react';
import './App.css';
import LoginBox from './components/accounts/loginBox';
import RegisterBox from './components/accounts/registerBox';
import LoginScreen from './components/accounts/loginScreen';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={apiHash: null}
    this.saveApiKey = this.saveApiKey.bind(this);
  }

  render() {
    return (
      <div className="App">  
        <LoginScreen alterKey={this.saveApiKey} /> 
      </div>
    );
  }
  saveApiKey(apiKey){
    this.setState({apiHash: apiKey});
    console.log(this.state.apiHash);
  }
}


export default App;
