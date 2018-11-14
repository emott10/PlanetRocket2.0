import React, { Component } from 'react';
import axios from 'axios';
import ipAddress from '../../config/ipAddress';
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
              <Button onClick = {(event) => 
                this.handleClick(event)
                }>
                Submit
              </Button>
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

   handleClick(event){
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
        //set the app state APIHash value to our received apiHAsh
        self.props.newKey(response.data.yourKey);     
      });
   }
}
export default LoginBox;