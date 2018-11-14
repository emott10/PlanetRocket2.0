import React, { Component } from 'react';
import './App.css';
import LoginScreen from './components/accounts/loginScreen';
import Dashboard from './components/dashboard/dashboard';



class App extends Component {

  constructor(props){
    super(props);

    //make sure to bind methods before state declaration, 
    //otherwise the methods will reference the wrong 'this' object
    this.saveApiKey = this.saveApiKey.bind(this);
    this.getApiKey = this.getApiKey.bind(this);
   // this.changeScreen = this.changeScreen.bind(this);

    this.state ={
      apiHash: null,
      currentScreen: <LoginScreen alterKey={this.saveApiKey.bind(this)}/> 
    }
    
  }

  render() {
    return (
      <div className="App">  
        {this.state.currentScreen} 
      </div>
    );
  }

  saveApiKey(apiKey){
    this.setState({apiHash: apiKey});

    
     // going to handle changing screens differently
     // this.setState({currentScreen: <Dashboard newScreen={this.changeScreen}/> })
  }

  getApiKey(){
    return this.state.apiHash;
  }

  /*
  Levi: 11/13
  This code is not currently in use, but may be useful?

  changeScreen(screenName){
    var screens = {
      login: <LoginScreen alterKey={this.saveApiKey}/>,
      dashboard: <Dashboard newScreen={this.changeScreen}/>
    }
    console.log(screenName);
    this.setState({currentScreen: screens[screenName]});
  
  }
  */

}



export default App;
