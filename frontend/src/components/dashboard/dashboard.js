/*
    LoginScreen: Manages the output for the RegisterBox 
                 the LoginBox. 
*/

//import './dashboard.css';
import React, { Component } from 'react';
import { 
    Container, Button,Col, Row, Modal, 
    ModalHeader, ModalBody, ModalFooter, 
    Form, FormGroup, Label, Input 
} from 'reactstrap';
import { ListItem } from '@material-ui/core';
import { Link } from "react-router-dom";
import HeaderAppBar from '../AppBar';


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
    }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    
    handleCanvasesClick(event){ 
            alert("canvas");
        }

    render(){
        var btnStyle = {
            backgroundColor: 'black',
            color: 'white',
        };

        return(
            <React.Fragment>
                <div className="h-100 container-fluid">
                    <Row className="h-100">
                        <Col className="h-100 d-flex align-items-center justify-content-center">
                            <Button onClick = {this.toggle}>{this.props.buttonLabel} Add an Idea </Button>
                        </Col>
                        <Col>
                            <ListItem button component={Link} to="/canvas/hftCourse" type="submit" onSubmit = {(event) => this.handleCanvasesClick(event)} 
                                      style={btnStyle}>
                                Canvases 
                            </ListItem>
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
                            />
                            </FormGroup>
                        </Col>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={this.toggle}>Save Idea</Button>
                    <Button color="danger" onClick={this.toggle}>Discard Idea</Button>
                </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Dashboard;