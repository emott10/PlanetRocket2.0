import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'	
import LoginBox from './components/accounts/loginBox';	
import RegisterBox from './components/accounts/registerBox';	
import FullPage from './components/splashScreen/splash';
import LoginScreen from './components/accounts/loginScreen';
import Dashboard from './components/dashboard/dashboard';
import PromptBox from './components/canvases/bmcCourse/promptBox';
import HFTPromptBox from './components/canvases/hftCourse/hftPromptBox';
import {BrowserView, MobileView} from "react-device-detect";



class App extends Component {

  constructor(props){
    super(props);

    //make sure to bind methods before state declaration, 
    //otherwise the methods will reference the wrong 'this' object
    this.saveApiKey = this.saveApiKey.bind(this);
    this.getApiKey = this.getApiKey.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
    //this.changeScreen = this.changeScreen.bind(this);
    //this.changeRoute = this.changeRoute.bind(this);

    this.state ={
      apiKey: null,
      user: null,
      loginSuccess: null,
      userScore: null
      //currentScreen: <LoginScreen alterKey={this.saveApiKey.bind(this)}/> 
    }
    
  }

  render() {
    return (
      <div>
      <BrowserView>
        <BrowserRouter>	       
        <div>
        <Switch>
          <Route exact path="/" component={FullPage} />	
          <Route path="/login" 
            component= {() => <LoginBox newKey={this.saveApiKey.bind(this)} 
                                        checkLogin={this.checkLogin.bind(this)}/>} 
          />	
          <Route path="/register" component={() => <RegisterBox newKey={this.saveApiKey.bind(this)}
                                                                checkLogin={this.checkLogin.bind(this)} />}/>
            <Route exact path="/dashboard" render={() => (
              this.state.loginSuccess ? (
                <Dashboard  userKey={this.state.apiKey} user={this.state.user}/>
              ) : (
                <Redirect to="/"/>
              )
            )}/>

          <Route path="/canvas/bmccourse" component={() => <PromptBox />}/>
          <Route path="/canvas/hftcourse" component={() => <HFTPromptBox />}/>
          <Route render={() => (
            <Redirect to ="/"/>
          )} />
        </Switch>
        </div>	
      </BrowserRouter>
     </BrowserView>
     
     <MobileView style={{color:"white"}}>
       This site functions exclusively in non-mobile browsers.
     </MobileView>
     </div>
   // <div className="App">  	
    //  {this.state.currentScreen} 	
    //</div>
    );
  }

  saveApiKey(key, username, score){
    this.setState({
      apiKey: key,
      user: username,
      userScore: score
    
    });

    
     // going to handle changing screens differently
     // this.setState({currentScreen: <Dashboard newScreen={this.changeScreen}/> })
  }

  getApiKey(){
    return this.state.apiHash;
  }

  checkLogin(response){
    if(response){
      this.setState({loginSuccess: true})
    }   
    else {
      this.setState({loginSuccess: false});
    }
   }

  changeScreen(screenName){
    var screens = {
      login: <LoginScreen alterKey={this.saveApiKey.bind(this)}/>,
      dashboard: <Dashboard newScreen={this.changeScreen.bind(this)}/>
    }
    console.log(screenName);
    this.setState({currentScreen: screens[screenName]}); 
  }
}

export default App;
