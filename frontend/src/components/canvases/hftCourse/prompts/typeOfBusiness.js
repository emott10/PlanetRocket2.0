import React, { Component } from 'react';
import { 
    Container, Button, Col, Row, Modal, 
    ModalHeader, ModalBody, ModalFooter, 
    Form, FormGroup, Label, Input 
} from 'reactstrap';
import promptText from './promptText';
import TargetResource from './targetResource';
import CustomerResource from './customerResource';

class TypeOfBusiness extends Component{
    constructor(props){
        super(props);

        this.state={
            textNum: 1,    
            btnMessage: "", 
            businessType: "",

        }
        //this.setText = this.setText.bind(this);
        //this.nextText = this.nextText.bind(this);
        //this.checkEnd = this.checkEnd.bind(this);
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
        if(event.target.id == "for-profit"){
            this.setState({businessType: event.currentTarget.value});
        }
        else if(event.target.id == "non-profit"){
            this.setState({businessType: event.currentTarget.value});
        }
    };

    submitButton = () => {
        if(this.state.businessType === "for-profit"){
            this.props.changeSegment(<CustomerResource changeSegment={this.props.changeSegment.bind(this)} />)
        }
        else{
            this.props.changeSegment(<TargetResource changeSegment={this.props.changeSegment.bind(this)} />)
        }
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
                <h2> Type of Business </h2>
            </Row> 
            <Form>
                <FormGroup>
                    <Row> <input type="radio" name="business-type" id="non-profit" value="non-profit" onChange = {this.handleInputChange.bind(this)}/> 
                        Non-profit
                    </Row>
                    <Row> <input type="radio" name="business-type" id="for-profit" value="for-profit" onChange = {this.handleInputChange.bind(this)}/> 
                        For-profit
                    </Row>
                </FormGroup>
            <Button style={btnStyle} onClick = {(event) => this.submitButton(event)}> Submit </Button>
            </Form>
          </Container>
        );
      }
}

export default TypeOfBusiness;