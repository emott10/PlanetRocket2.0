

/*
  LoginScreen: Manages the output for the RegisterBox 
    the LoginBox. 
    
                    <Button color="success" onClick={this.toggle}>Save Idea</Button>
                    <Button color="danger" onClick={this.toggle}>Discard Idea</Button>
                </ModalFooter>
                </Modal>
            </React.Fragment>
*/

import './dashboard.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
    Container, Button,Col, Row, Modal, 
    ModalHeader, ModalBody, ModalFooter, 
    Form, FormGroup, Label, Input 
} from 'reactstrap';
import axios from 'axios';
import ipAddress from '../../config/ipAddress';
import DbHeaderAppBar from './DashboardAppBar';
import IdeasTable from '../IdeasTable';
import Scores from './scores.png';

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
            score: 0,
            ideas: []
        }

        this.toggle = this.toggle.bind(this);
        this.handleIdeaNameChange = this.handleIdeaNameChange.bind(this);
        this.handleIdeaDescriptionChange = this.handleIdeaDescriptionChange.bind(this);
        this.createIdea = this.createIdea.bind(this);
        this.boostScore = this.boostScore.bind(this);
    }
    
    toggle() {
      this.boostScore();
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
            
             
            var newAr = self.state.ideas.slice();
            newAr.push(response.data.idea);
            self.setState({
                ideas: newAr
            });

            self.toggle();
        } );
    }


    componentDidMount(){

        var self = this;
        var getIdeasUrl = ipAddress + ':3001/api/idea/' + this.props.userKey + '/userIdeas/' + this.props.user;
        var getScoreUrl = ipAddress + ':3001/api/users/' + this.props.userKey + '/user/'+ this.props.user + '/score';

        axios.get(getIdeasUrl).then((response) => {
            
            self.setState({
                ideas: response.data
            });

        });

        axios.get(getScoreUrl).then((response) => {
            self.setState({
                score: response.data.score
            });
        })
    }

    boostScore(){
        var self = this;
        var updateScoreUrl = ipAddress + ':3001/api/users/' + this.props.userKey + '/user/' + this.props.user + '/incrementScore';
        console.log(updateScoreUrl);
        axios.put(updateScoreUrl).then((response) => {
            self.state.score++;
            console.log(response);
        });
    }
    


render(){
    return(
        <div>
            <DbHeaderAppBar />

            <Container >
                <Row style={style}>
                    <Col sm = {{size: 12}} md = {{size: 12}} lg = {{size: 12}}>
                    	<Row className="justify-contents-center align-items-center" style={{color:'white'}}>
                        	<h1 style={{color:'white'}}> Welcome! </h1>
                        	<Col className="justify-contents-center align-items-center" style={{textAlign:'right'}}>
                       			<img style={{width:'4%', height:'4%'}}src={Scores}/>
                       			{' '}{this.state.score}
                       		</Col>
                       	</Row>
                        <IdeasTable userKey={this.props.userKey} user={this.props.user} rows={this.state.ideas}/>
                        <Col className="d-flex justify-content-center" style = {{ marginTop: '2em'}}>
                            <Button  onClick = {this.toggle} style={{marginRight: '1em'}}>{this.props.buttonLabel} Add an Idea </Button>
                        </Col>
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

      //Levi: Don't know if this line is good?
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
