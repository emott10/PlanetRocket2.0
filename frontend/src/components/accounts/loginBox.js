import React, { Component } from 'react';
import axios from 'axios';
import ipAddress from '../../config/ipAddress';
//used tutorial at: https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede
class LoginBox extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
        }

        this.handleClick = this.handleClick.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    render() {
        return(
            <div>
                <h1>Login</h1>
                <label htmlFor="username">Username: </label>
                <input
                    id="username"
                    type="text"
                    onChange = { this.handleUsernameChange}
                    value={this.state.username}
                        />
                <br />
                <label htmlFor="password">Password: </label>
                <input
                    id="password"
                    type="password"
                    onChange = { this.handlePasswordChange}
                    value={this.state.password}
                        />
                <br/>
                <input type="submit" onClick = {(event) => this.handleClick(event)} />
            </div>
        );
   }

   handlePasswordChange(event){
       this.setState({password: event.target.value});
       console.log(this.state.password);
   }

   handleUsernameChange(event){
        this.setState({username: event.target.value});
        console.log(this.state.username)
    }

   handleClick(event){
       console.log(ipAddress);
       
       var loginURL = ipAddress + ':3001/api/key';
       
       console.log("info before sending: " + this.state.username + " " + this.state.password);
       var payload = {
           "username": this.state.username,
           "password": this.state.password
       };
       axios.post(loginURL, payload).then(function(response) {
           console.log(response);
       });
   }
}
export default LoginBox;;