/*
    LoginScreen: Manages the output for the RegisterBox 
                 the LoginBox. 
*/

import React, { Component } from 'react';
import RegisterBox from './registerBox';
import LoginBox from './loginBox';
import {
    Container, Button,
} from 'reactstrap';


class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:true,         
            buttonMessage:'Register',
            pageView:[],
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        if(this.state.isLogin == true){
            this.setState({buttonMessage: 'Login'});
            this.setState({isLogin: false});
            this.setState({pageView: <RegisterBox /> });
        }
        else{
            this.setState({buttonMessage: 'Register'});
            this.setState({isLogin: true});
            this.setState({pageView: <LoginBox /> });
        }
    }

    componentDidMount(){
        if(this.state.isLogin){
            this.setState({pageView: <LoginBox /> });
        }
        else if(!this.state.isLogin){
            this.setState({pageView: <RegisterBox /> });
        }
    }

    render(){
        return(
            <Container className="loginScreen">
                {this.state.pageView}
                <Button onClick = {(event) => this.handleClick(event)}>{this.state.buttonMessage}</Button>
            </Container>
        )
    }
}

export default LoginScreen;