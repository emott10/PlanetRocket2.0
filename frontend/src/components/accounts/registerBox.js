import React, { Component } from 'react';
import axios from 'axios';
import ipAddress from '../../config/ipAddress';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';


class RegisterBox extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
        }

        this.handleClick = this.handleClick.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
       // this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    render() {
        return (
          <Container className="RegisterBox">
            <h2>Register here</h2>
            <Form className="form">
              <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="text"
                    id="username"
                    onChange = {this.handleUsernameChange}
                    value = {this.state.username}
                    placeholder="myemail@email.com"
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
                    onChange = {this.handlePasswordChange}
                    value={this.state.password}
                    placeholder="********"
                  />
                </FormGroup>
              </Col>
              <ListItem button component={Link} to="/dashboard" type="submit" onClick = {(event) => this.handleClick(event)}>
                <Button>Submit</Button>
              </ListItem>
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
        var backendURL = ipAddress + ":3001/api/register";
        var loginURL = ipAddress + ':3001/api/key';

        console.log("info before sending: " + this.state.username + " " + this.state.password);
        
        //defining self to use prop methods
        var self = this;

        var payload = {
            "username": this.state.username,
            "password": this.state.password
        };
        axios.post(backendURL, payload)
        .then((response) => {
          console.log(response);
          return axios.post(loginURL, payload)
        })
        .then((response) => {
          self.props.newKey(response.data.yourKey);  
        self.props.checkLogin(response.data.loginSuccess);
        })
        .catch((err) => {
          console.log(err);
        });
    }
}
export default RegisterBox;
