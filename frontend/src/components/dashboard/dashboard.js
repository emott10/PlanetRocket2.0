import './dashboard.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
    Container, Button,Col, Row, Modal, 
    ModalHeader, ModalBody, ModalFooter, 
    Form, FormGroup, Label, Input 
} from 'reactstrap';
import DbHeaderAppBar from '../DashboardAppBar';
import axios from 'axios';
import ipAddress from '../../config/ipAddress';

const style = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}

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

    handleCanvasesClick(event){
        alert("canvas");
    }

render(){
    return(
        <div>
            <DbHeaderAppBar />
            
            <Container style={style}>
                <Row className="h-100">
                    <Col className="h-100 d-flex align-items-center justify-content-center">
                        <Button onClick = {this.toggle} style={{marginRight: '1em'}}>{this.props.buttonLabel} Add an Idea </Button>
                        <Button onClick = {(event) => this.handleCanvasesClick(event)}> Course </Button>
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
                                onChange={this.handleIdeaNameChange}
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
                                onChange={this.handleIdeaDescriptionChange}
                                type="textarea"
                                id="ideaDes"
                                placeholder="Snakes get cold too, we will give them a sweater!"
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
        </div>
        )
    }
}

ReactDOM.render(
    <Dashboard />,
    document.getElementById('root')
  );

export default Dashboard;