import React, { Component } from 'react';
import { 
    Container, Button, Card, CardBody, CardHeader, CardText, Input, Form
} from 'reactstrap';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
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

        var updateScoreUrl = ipAddress + ':3001/api/users/' + this.props.userKey + '/user/' + this.props.user + '/incrementScore';
        console.log(updateScoreUrl);
        axios.put(updateScoreUrl).then((response) => {
            console.log(response);
        } );
        this.props.changeSegment(<Dashboard changeSegment={this.props.changeSegment.bind(this)} userKey={this.props.userKey} user={this.props.user}/>);

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
                    <Form>
                    <Input type="text" name="customers" id="customers" value={this.state.customers} onChange = {this.handleInputChange.bind(this)}/> 
                    <br />
                    <ListItem button component={Link} to="/dashboard" type="submit" onClick = {(event) => this.submitButton(event)}>
                        <Button color="success">Finish Course</Button>
                    </ListItem>
                    </Form>                  
                </CardBody>
            </Card>
          </Container>
        );
      }
}

export default Customers;