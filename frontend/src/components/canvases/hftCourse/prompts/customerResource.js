import React, { Component } from 'react';
import { 
    Container, Button, Row,
    Form, FormGroup
} from 'reactstrap';
import Customers from './customers';
import ListItem from '@material-ui/core/ListItem';

class CustomersResource extends Component{
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
                <h2> Customers Resources </h2>
            </Row> 
            <Form>
                <FormGroup>
                    <Row> 
                        Before you decide what your customers would be, here are some Resources
                        that we suggest you extensively review. 
                    </Row>
                    <Row>
                        <a href='https://en.wikipedia.org/wiki/Market_segmentation'> Customer Resource </a>
                    </Row>
                </FormGroup>
            <ListItem button onClick={this.submitButton.bind(this)}> 
                <Button> Continue </Button> 
            </ListItem>            
            </Form>
          </Container>
        );
      }
}

export default CustomersResource;