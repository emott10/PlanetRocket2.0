/*
    LoginScreen: Manages the output for the RegisterBox 
                 the LoginBox. 
*/

import React, { Component } from 'react';
import {
    Container, Button,
} from 'reactstrap';


class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:true,         
            pageView:[],
        }
        this.handleIdeasClick = this.handleIdeasClick.bind(this);
        this.handleCanvasesClick = this.handleCanvasesClick.bind(this);
    }

    handleIdeasClick(event){
        alert("ideas");
        }
    handleCanvasesClick(event){
        alert("canvas");
        }

    render(){
        return(
            <Container className="dashboard">
                {this.state.pageView}
                <Button onClick = {(event) => this.handleIdeasClick(event)}> Ideas </Button>
                <Button onClick = {(event) => this.handleCanvasesClick(event)}> Canvases </Button>
            </Container>
        )
    }
}

export default Dashboard;