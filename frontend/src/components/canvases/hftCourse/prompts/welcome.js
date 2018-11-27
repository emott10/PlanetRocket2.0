import React, { Component } from 'react';
import { 
    Container, Button, Col, Row, Modal, 
    ModalHeader, ModalBody, ModalFooter, 
    Form, FormGroup, Label, Input 
} from 'reactstrap';
import promptText from './promptText';
import TypeOfBusiness from './typeOfBusiness';


class Welcome extends Component{
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

    submitButton = () => {
            this.props.changeSegment(<TypeOfBusiness changeSegment={this.props.changeSegment.bind(this)} />)  
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
          <Container className="courseInfo" style={conStyle}>      
            <Row className="box" style={h2Style}>
                <h2>Welcome!</h2>
            </Row> 
            <Form>
				<h3> In this course you will develop your idea into a for-profit or non-profit and identify who you are targeting. </h3>
            <Button style={btnStyle} onClick = {(event) => this.submitButton(event)}> Continue </Button>
            </Form>
          </Container>
        );
      }
}

export default Welcome;