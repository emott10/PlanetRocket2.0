import React, { Component } from 'react';
import './App.css';
import LoginBox from './components/accounts/loginBox';
import RegisterBox from './components/accounts/registerBox';
import LoginScreen from './components/accounts/loginScreen';
import Dashboard from './components/dashboard/dashboard';



class App extends Component {

  constructor(props){
    super(props);

    //make sure to bind methods before state declaration, 
    //otherwise the methods will reference the wrong 'this' object
    this.saveApiKey = this.saveApiKey.bind(this);
    this.getApiKey = this.getApiKey.bind(this);
    this.changeScreen = this.changeScreen.bind(this);

    this.state ={
      apiHash: null,
      currentScreen: <LoginScreen alterKey={this.saveApiKey}/> 
    }
    
  }

  render() {
    return (
      <div className="App">  
<<<<<<< HEAD
        <LoginScreen /> 
        <Dashboard />
=======
        {this.state.currentScreen} 
>>>>>>> 47fb51dd1ab3ff029910a97807d68227d9ed893b
      </div>
    );
  }
  saveApiKey(apiKey){
    this.setState({apiHash: apiKey});
    this.setState({currentScreen: <Dashboard newScreen={this.changeScreen}/> })
  }

  getApiKey(){
    return this.state.apiHash;
  }

  changeScreen(screenName){
    var screens = {
      login: <LoginScreen alterKey={this.saveApiKey}/>,
      dashboard: <Dashboard newScreen={this.changeScreen}/>
    }
    console.log(screenName);
    this.setState({currentScreen: screens[screenName]});

  }
}


export default App;
