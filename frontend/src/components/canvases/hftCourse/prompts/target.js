import React, { Component } from 'react';
import { 
    Container, Button, Card, CardBody, CardHeader, CardText, Input
} from 'reactstrap';
import Dashboard from '../../../dashboard/dashboard';

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
        var conStyle = {
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'
        }

        var cardStyle ={
            width: '100%'
         }
        return (
          <Container className="typeOfBusiness" style={conStyle}>      
            <Card style={cardStyle}>
                <CardHeader tag="h3">
                    Who are you targeting?
                </CardHeader>
                <CardBody className="text-center" /* className="courseInfo" style={conStyle} */>      
                    <CardText>Please indicate who your target demographic is:  </CardText>
                    <Input type="text" name="customers" id="customers" value={this.state.customers} onChange = {this.handleInputChange.bind(this)}/> 
                    <br />
                    <Button color="success" onClick = {(event) => this.submitButton(event)}> Finish Course </Button>
                </CardBody>
            </Card>
          </Container>
        );
      }
}

export default Target;