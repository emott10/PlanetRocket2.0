import React, { Component } from 'react';
import { 
    Card, CardBody, CardText, CardTitle, CardHeader, Container, Row, Col, Button
} from 'reactstrap';
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
            this.props.changeSegment(<CustomerResource changeSegment={this.props.changeSegment.bind(this)} userKey={this.props.userKey} user={this.props.user}/>)
        }
        else if(this.state.businessType === "non-profit"){
            this.props.changeSegment(<TargetResource changeSegment={this.props.changeSegment.bind(this)} userKey={this.props.userKey} user={this.props.user}/>)
        }
        else{
            alert("Please chose either Non-Profit or For-Profit");
        }
    }

    //details needs to change per thing.
    render() {
        var forProfit = {
             marginLeft: '5em',
             marginRight: '1em'
        }
        var nonProfit = {
            marginRight: '1em'
       }
        var cardStyle ={
           width: '100%'
        }
        var conStyle={
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'
        }
        return (
          <Container style={conStyle} sm={{ size: 12}}>      
            <Card style={cardStyle}>
                <CardHeader tag="h3">
                    Develop your idea! 
                </CardHeader>
                <CardBody className="text-center" /* className="courseInfo" style={conStyle} */>  
                    <CardTitle>
                        Is your idea for a Non-Profit or For-Profit company?
                    </CardTitle>
                    <CardText>
                        <Row sm={{ size: 12}} className="justify-content-center align-items-center">
                            <input style={nonProfit} type="radio" name="business-type" id="non-profit" value="non-profit" 
                                onChange = {this.handleInputChange.bind(this)}/> 
                            Non-profit

                            <input style={forProfit} type="radio" name="business-type" id="for-profit" value="for-profit" 
                                onChange = {this.handleInputChange.bind(this)}/> 
                            For-profit
                        </Row>
                    </CardText>
                    <Button color="success" onClick = {(event) => this.submitButton(event)}> Continue </Button>
                </CardBody>
            </Card>
          </Container>
        );
      }
}

export default TypeOfBusiness;