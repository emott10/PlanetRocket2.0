/*
    LoginScreen: Manages the output for the RegisterBox 
                 the LoginBox. 
*/

import './dashboard.css';
import React, { Component } from 'react';
import { 
    Container, Button,Col, Row, Modal, 
    ModalHeader, ModalBody, ModalFooter, 
    Form, FormGroup, Label, Input,
    ListGroup, ListGroupItem
} from 'reactstrap';
import HeaderAppBar from '../AppBar';
import ipAddress from '../../config/ipAddress';
import axios from 'axios';


class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:true,         
            pageView:[],
            modal: false,
            ideaTitle:'',
            ideaDes:'',
        }
        this.handleCanvasesClick = this.handleCanvasesClick.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleIdeaNameChange = this.handleIdeaNameChange.bind(this);
        this.handleIdeaDescriptionChange = this.handleIdeaDescriptionChange.bind(this);
        this.createIdea = this.createIdea.bind(this);
    }
    
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
      
    }

    createIdea(event){
        var createIdeaUrl = ipAddress + ':3001/api/idea/' + this.props.userKey + '/user/' + this.props.user + '/newIdea';

        var self = this;

        var payload = {
            "ideaName":this.state.ideaTitle,
            "ideaDescription": this.state.ideaDes
        }

        axios.post(createIdeaUrl, payload).then((response) => {
            console.log(response.data);

            self.toggle();
        } );




    }
    
    handleIdeaNameChange(event){
        this.setState({
            ideaTitle: event.target.value
        });
    }

    handleIdeaDescriptionChange(event){
        this.setState({
            ideaDes: event.target.value
        });
    }

    handleCanvasesClick(event){
            alert("canvas");
    }

    

    render(){
        return(
            <React.Fragment>
                <div className="h-100 container-fluid">
                    <Row className="h-100">
                        <Col className="h-100 d-flex align-items-center justify-content-center">
                            <Button onClick = {this.toggle}>{this.props.buttonLabel} Add an Idea </Button>
                            <Button onClick = {(event) => this.handleCanvasesClick(event)}> Course </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ListGroup>
                                <ListGroupItem>Ideas will go here (will create a serpate component for this)</ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                    {this.state.pageView}
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>New Idea</ModalHeader>
                <ModalBody>
                    <Form className="form">
                        <Col>
                            <FormGroup>
                            <Label>Title</Label>
                            <Input
                                type="text"
                                id="ideaTitle"
                                placeholder="Sweaters for Snakes"
                                onChange={this.handleIdeaNameChange}
                            />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                            <Label>Idea Description</Label>
                            <Input
                                type="textarea"
                                id="ideaDes"
                                placeholder="Snakes get cold too, we will give them a sweater!"
                                onChange={this.handleIdeaDescriptionChange}
                            />
                            </FormGroup>
                        </Col>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={this.createIdea}>Save Idea</Button>{' '}
                    <Button color="danger" onClick={this.toggle}>Discard Idea</Button>
                </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Dashboard;