import React, { Component } from 'react';
import axios from 'axios';
import ipAddress from '../../config/ipAddress';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";
import { Route, Redirect, withRouter } from 'react-router';

//used tutorial at: https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Alert
} from 'reactstrap';

class LoginBox extends Component{
  constructor(props){
      super(props);
      this.state={
          username: '',
          password: '',
          loginStatus:'',
          noUsername: false,
          noPassword: false,
          incorrectLogin: false
      }

      this.handleClick = this.handleClick.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.onDismiss = this.onDismiss.bind(this);
  }
  
  onDismiss() {
    this.setState({ 
      noPassword: false,
      noUsername: false,
      incorrectLogin: false
      });
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value});
    
  }

  handleUsernameChange(event){
      this.setState({username: event.target.value});
      
  }

  handleClick(event){

    if(this.state.username === null || this.state.username === ''){
      this.setState({
        noUsername: true
      });
    }

    else if(this.state.password === null || this.state.password === ''){
      this.setState({
        noPassword: true
      });
    }

    else{
      //get the url to send our post request to
      var loginURL = ipAddress + ':3001/api/key';

      //define self so that we can access prop methods from within the axios response
      var self = this;

      //the data being sent inn our post request
      var payload = {
          "username": this.state.username,
          "password": this.state.password
      };
      
      //the post request and response are handled here
    
      axios.post(loginURL, payload).then(function(response) {

        if(response.data.loginSuccess) {

          //REMOVE THIS LINE AFTER TESTING
          console.log(response.data.yourKey);

          //set the app state APIHKey value to our received apiKey
          self.props.newKey(response.data.yourKey, self.state.username, response.data.score);  
          self.props.checkLogin(response.data.loginSuccess);
          self.props.history.push('/dashboard');
        }
        else{
          self.setState({
            incorrectLogin: true
          });
        }

      });
    }
  }

  render() {
    return (
      
      <Container className="LoginBox">
      <Alert color="danger" isOpen={this.state.noPassword} toggle={this.onDismiss}>
        Please enter in a password
      </Alert>
      <Alert color="danger" isOpen={this.state.noUsername} toggle={this.onDismiss}>
        Please enter in a username
      </Alert>
      <Alert color="danger" isOpen={this.state.incorrectLogin} toggle={this.onDismiss}>
        Incorrect username or password
      </Alert>
        <h2 style={{color:'white'}}>Login here</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label style={{color:'white'}}>Username</Label>
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
              <Label for="Password" style={{color:'white'}}>Password</Label>
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
          <Button onClick = {this.handleClick} color='success'> Submit </Button>         
          <ListItem button component={Link} to="/register" style={{color:'white'}}> Not a member yet? Click here to register! </ListItem>
        </Form>
      </Container>
      );
    }
}

const LoginWithRouter = withRouter(LoginBox);
export default LoginWithRouter ;