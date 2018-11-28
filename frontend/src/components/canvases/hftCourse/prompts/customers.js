import React, { Component } from 'react';
import { 
    Container, Button, Card, CardBody, CardHeader, CardText, Input 
} from 'reactstrap';
import Dashboard from '../../../dashboard/dashboard';
import axios from 'axios';
import ipAddress from '../../../../config/ipAddress';

class Customers extends Component{
    constructor(props){
        super(props);

        this.state={
            textNum: 1,    
            btnMessage: "", 
            customers: "",

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
        if(event.target.id === "customers"){
            this.setState({customers: event.target.value});
        }
    };
 
    submitButton = () => {

        this.props.changeSegment(<Dashboard changeSegment={this.props.changeSegment.bind(this)} userKey={this.props.userKey} user={this.props.user}/>);
        
        var updateScoreUrl = ipAddress + ':3001/api/users/' + this.props.apiKey + '/user/' + this.props.user + '/incrementScore';
        axios.put(updateScoreUrl).then((response) => {
            console.log(response);
        } );

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
                    Who are you customers?
                </CardHeader>
                <CardBody className="text-center" /* className="courseInfo" style={conStyle} */>      
                    <CardText>Please indicate who your customers are:  </CardText>
                    <Input type="text" name="customers" id="customers" value={this.state.customers} onChange = {this.handleInputChange.bind(this)}/> 
                    <br />
                    <Button color="success" onClick = {(event) => this.submitButton(event)}> Finish Course </Button>
                </CardBody>
            </Card>
          </Container>
        );
      }
}

export default Customers;