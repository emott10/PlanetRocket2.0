import React, { Component } from 'react';
import { 
    Container, Button, Col, Row, Modal, 
    ModalHeader, ModalBody, ModalFooter, 
    Form, FormGroup, Label, Input 
} from 'reactstrap';
import promptText from './promptText';
import Dashboard from '../../../dashboard/dashboard';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";

class Target extends Component{
    constructor(props){
        super(props);

        this.state={
            textNum: 1,    
            btnMessage: "", 
            target: "",

        }
       
    }

    /*
    setInput = (text, name) => {
        return (
            <Container>
            <div>{text}</div>
            <br/>
            <div>{text}</div>
            <br/>
            <Input 
                type="text" 
                id={name} 
                name={name}
                onChange = {this.handleInputChange.bind(this)}
                value={this.state.idealCustomer}
            />                
            </Container>
        );   
    };
    */

    handleInputChange = (event) => {
        if(event.target.id === "target"){
            this.setState({target: event.target.value});
        }
    };
 
    submitButton = () => {
        this.props.changeSegment(<Dashboard changeSegment={this.props.changeSegment.bind(this)} />)        
    }

    //details needs to change per thing.
    render() {
        var btnStyle = {
            position: 'relative', 
            top:200, 
        }
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
                <h2> Target </h2>
            </Row> 
            <Form>
                <FormGroup>
                    <Row> 
                        What is your target demographic?
                        <Input type="text" name="target" id="target" value={this.state.target} onChange = {this.handleInputChange.bind(this)}/> 
                    </Row>
                </FormGroup>
            <ListItem button component={Link} to="/dashboard" type="submit"> 
                <Button>Submit Course</Button> 
            </ListItem>            
            </Form>
          </Container>
        );
      }
}

export default Target;