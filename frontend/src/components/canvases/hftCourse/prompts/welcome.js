import React, { Component } from 'react';
import { 
    Card, CardBody, CardText, CardHeader, Container, Button
} from 'reactstrap';
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
            this.props.changeSegment(<TypeOfBusiness changeSegment={this.props.changeSegment.bind(this)} userKey={this.props.userKey} user={this.props.user} />)  
    }

    //details needs to change per thing.
    render() {
        var conStyle = {
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'
        }

        var cardStyle ={
            width: '100%'
         }

        return (
        <Container style={conStyle}>
            <Card style={cardStyle}>
                <CardHeader tag="h3">
                    Welcome!
                </CardHeader>
                <CardBody className="text-center" /* className="courseInfo" style={conStyle} */>      
                    
                    <CardText>In this course you will develop your idea into a for-profit or non-profit and identify who you are targeting. </CardText>
                    <Button color="success" onClick = {(event) => this.submitButton(event)}> Continue </Button>
                </CardBody>
            </Card>
          </Container>
        );
      }
}

export default Welcome;

