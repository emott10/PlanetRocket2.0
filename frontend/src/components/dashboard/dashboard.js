
import React, { Component } from 'react';
import { 
    Container, Button,Col, Row, Modal, 
    ModalHeader, ModalBody, ModalFooter, 
    Form, FormGroup, Label, Input 
} from 'reactstrap';


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
        return(
            <div>
                <Container className="dashboard">
                    <Row>   
                        <Col>
                            <Button onClick = {this.toggle}>{this.props.buttonLabel} Add an Idea </Button>
                        </Col>
                        <Col>
                            <Button onClick = {(event) => this.handleCanvasesClick(event)}> Canvases </Button>
                        </Col>
                    </Row>
                    
                    {this.state.pageView}
                </Container>

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
                                value = {this.state.ideaTitle}
                                placeholder="Sweaters for Snakes"
                            />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                            <Label>Idea Description</Label>
                            <Input
                                type="text"
                                id="ideaDes"
                                value={this.state.ideaDes}
                                placeholder="Snakes get cold too, we will give them a sweater!"
                            />
                            </FormGroup>
                        </Col>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Save Idea</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Discard Idea</Button>
                </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default Dashboard;