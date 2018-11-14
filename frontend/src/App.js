import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'	
import LoginBox from './components/accounts/loginBox';	
import RegisterBox from './components/accounts/registerBox';	
import FullPage from './splash.js';
import LoginScreen from './components/accounts/loginScreen';
import Dashboard from './components/dashboard/dashboard';



class App extends Component {

  constructor(props){
    super(props);

    //make sure to bind methods before state declaration, 
    //otherwise the methods will reference the wrong 'this' object
    this.saveApiKey = this.saveApiKey.bind(this);
    this.getApiKey = this.getApiKey.bind(this);
    //this.changeScreen = this.changeScreen.bind(this);
    //this.changeRoute = this.changeRoute.bind(this);

    this.state ={
      apiHash: null,
      //currentScreen: <LoginScreen alterKey={this.saveApiKey.bind(this)}/> 
    }
    
  }

  render() {
    return (
<<<<<<< HEAD
      <BrowserRouter>	  
      <div>	 
=======
      <BrowserRouter>	       
      <div>
>>>>>>> 97861c6aab8e79765e0425fd12ea8e726ec815f6
        <Route exact path="/" component={FullPage} />	
        <Route path="/login" component= {() => <LoginBox newKey={this.saveApiKey.bind(this)} />} />	
        <Route path="/register" component={() => <RegisterBox newKey={this.saveApiKey.bind(this)} />}/>
        <Route path="/dashboard" component={Dashboard} />	
      </div>	
     </BrowserRouter>	
      
   // <div className="App">  	
    //  {this.state.currentScreen} 	
    //</div>
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
  changeScreen(screenName){
    var screens = {
      login: <LoginScreen alterKey={this.saveApiKey.bind(this)}/>,
      dashboard: <Dashboard newScreen={this.changeScreen.bind(this)}/>
    }
    console.log(screenName);
    this.setState({currentScreen: screens[screenName]}); 
  }
  */
}

export default App;
