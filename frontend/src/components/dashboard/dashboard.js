/*
    LoginScreen: Manages the output for the RegisterBox 
                 the LoginBox. 
*/

import React, { Component } from 'react';
import IdeaScreen from '../ideas/ideaScreen';
import {
    Container, Button,
    Col, Row,
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
        this.setState({pageView: <IdeaScreen />});
        }
    handleCanvasesClick(event){
        alert("canvas");
        }

    render(){
        return(
            <Container className="dashboard">
            <Row>   
                <Col>
                    <Button onClick = {(event) => this.handleIdeasClick(event)}> Ideas </Button>
                </Col>
                <Col>
                    <Button onClick = {(event) => this.handleCanvasesClick(event)}> Canvases </Button>
                </Col>
            </Row>
            current
            {this.state.pageView}
            </Container>
        )
    }
}

export default Dashboard;