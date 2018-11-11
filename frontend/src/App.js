import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import LoginBox from './components/accounts/loginBox';
import RegisterBox from './components/accounts/registerBox';
import FullPage from './splash.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={apiHash: null}
    this.saveApiKey = this.saveApiKey.bind(this);
  }

  render() {
    return (

      <BrowserRouter>
        <div>
          <Route exact path="/" component={FullPage} />
          <Route path="/login" component= {() => <LoginBox alterKey={this.saveApiKey}/>} />
          <Route path="/register" component={() => <RegisterBox alterKey={this.saveApiKey}/>} />
        </div>
    </BrowserRouter>
      
    );
  }
  saveApiKey(apiKey){
    this.setState({apiHash: apiKey});
    console.log(this.state.apiHash);
  }
}

export default App;
