import React, { Component } from 'react';
import axios from 'axios';
//used tutorial at: https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
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
        return (
          <Container className="LoginBox">
            <h2>Login here</h2>
            <Form className="form">
              <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="text"
                    id="username"
                    onChange = {this.handleUsernameChange}
                    value = {this.state.username}
                    placeholder="myusername"
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    onChange = { this.handlePasswordChange}
                    value={this.state.password}
                    placeholder="********"
                  />
                </FormGroup>
              </Col>
              <Button onClick = {(event) => this.handleClick(event)}>Submit</Button>
            </Form>
          </Container>
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
       console.log('test');
       var backendURL = "http://34.214.141.80:3001";
       var self = this;
       console.log("info before sending: " + this.state.username + " " + this.state.password);
       var payload = {
           "username": this.state.username,
           "password": this.state.password
       };
       axios.post(backendURL, payload).then(function(response) {
           console.log(response);
       });
   }
}
export default LoginBox;;