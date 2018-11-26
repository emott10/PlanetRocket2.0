import React, { Component } from 'react';
import axios from 'axios';
import ipAddress from '../../config/ipAddress';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Alert,
} from 'reactstrap';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import { withRouter } from '../../../node_modules/react-router';


class RegisterBox extends Component{
    constructor(props){
        super(props);
        this.state={
            username: null,
            password: null,
            noUsername: false,
            noPassword: false,
            usernameTaken: false
        }

        this.handleClick = this.handleClick.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
       // this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    onDismiss() {
      this.setState({ 
        noPassword: false,
        noUsername: false,
        usernameTaken: false
       });
    }

    render() {
        return (
          <Container className="RegisterBox">
          <Alert color="danger" isOpen={this.state.noPassword} toggle={this.onDismiss}>
            Please enter in a password
          </Alert>
          <Alert color="danger" isOpen={this.state.noUsername} toggle={this.onDismiss}>
            Please enter in a username
          </Alert>
          <Alert color="danger" isOpen={this.state.usernameTaken} toggle={this.onDismiss}>
            Username is not unique
          </Alert>
            <h2>Register here</h2>
            <Form className="form">
              <Col>
                <FormGroup>
                  <Label>Username</Label>
                  <Input
                    type="text"
                    id="username"
                    onChange = {this.handleUsernameChange}
                    value = {this.state.username}
                    placeholder="Your Unique Username"
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
              <Button onClick = { this.handleClick}>Submit</Button>
              <ListItem button component={Link} to="/login"> Already a member? Click here to Login! </ListItem>
            </Form>
          </Container>
        );
      }
    
      handlePasswordChange(event){
        this.setState({password: event.target.value});
        
    }
 
    handleUsernameChange(event){
         this.setState({username: event.target.value});
         
     }

     /*
    handleLoginClick(e){
      e.preventDefault();
      this.setState
    }
*/

    handleClick(event){
      var self = this;

      if(this.state.username === null || this.state.username === ""){
        this.setState({
          noUsername: true
        });
      }
  
      else if(this.state.password === null || this.state.password === ""){
        this.setState({
          noPassword: true
        });
      }
      else{
        var backendURL = ipAddress + ":3001/api/register";
        console.log("info before sending: " + this.state.username + " " + this.state.password);
        var payload = {
            "username": this.state.username,
            "password": this.state.password
        };
        axios.post(backendURL, payload).then(function(response) {
          console.log(response.data);
          if(response.data.userCreated){
            self.props.history.push('/login');
          }
          else{
            self.setState({
              usernameTaken: true
            });
          }
            
        });
      }
    }
}

var RegisterWithRouter = withRouter(RegisterBox);
export default RegisterWithRouter;
