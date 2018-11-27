import React, { Component } from 'react';
import { 
    Container, Button, Col, Row, Modal, 
    ModalHeader, ModalBody, ModalFooter, 
    Form, FormGroup, Label, Input 
} from 'reactstrap';
import promptText from './promptText';
import Dashboard from '../../../dashboard/dashboard';
import Customers from './customers';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";
import Target from './target';

class TargetResource extends Component{
    constructor(props){
        super(props);

        this.state={
            textNum: 1,    
            btnMessage: "", 
        }
       
    }

    handleInputChange = (event) => {
        if(event.target.id === "customers"){
            this.setState({customers: event.target.value});
        }
    };
 
    submitButton = () => {
        this.props.changeSegment(<Customers changeSegment={this.props.changeSegment.bind(this)} />)        
    }

    //details needs to change per thing.
    render() {
        var h2Style ={
            background: '#4286f4',
            color: '#ffffff',
            width: 1106,
            border: '1px solid blue',
        }
        var conStyle={
            border: '2px solid #000000',
            height: 450,
        }
        return (
          <Container className="typeOfBusiness" style={conStyle}>      
            <Row className="box" style={h2Style}>
                <h2> Target Audience </h2>
            </Row> 
            <Form>
                <FormGroup>
                    <Row> 
                        Before you decide what your target audience would be, here are some Resources
                        that we suggest you extensively review. 
                    </Row>
                    <Row>
                        <a href='https://en.wikipedia.org/wiki/Key_demographic'> Target Demographic Resource </a>
                    </Row>
                </FormGroup>
            <ListItem button onClick={this.submitButton.bind(this)}> 
                <Button>Continue</Button> 
            </ListItem>            
            </Form>
          </Container>
        );
      }
}

export default TargetResource;