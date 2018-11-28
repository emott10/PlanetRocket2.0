import React, { Component } from 'react';
import { 
    Container, Button, Card, CardText, CardTitle, CardHeader, CardBody
} from 'reactstrap';
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
        this.props.changeSegment(<Target changeSegment={this.props.changeSegment.bind(this)} userKey={this.props.userKey} user={this.props.user}/>)        
    }

    openResource = () => {
        window.open('https://en.wikipedia.org/wiki/Key_demographic', '_blank');
      }

    //details needs to change per thing.
    render() {
        var cardStyle ={
            width: '100%'
        }

        var conStyle={
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'
        }
        return (
          <Container className="typeOfBusiness" style={conStyle}>      
            <Card style={cardStyle}>
                <CardHeader tag="h3">
                    Target Audience
                </CardHeader>
                <CardBody className="text-center" /* className="courseInfo" style={conStyle} */>  
                    <CardTitle>
                        Before you decide what your target audience would be, please take a moment and review this resource!
                    </CardTitle>
                    <CardText>
                        <Button color="primary" onClick={this.openResource}> Target Demographic Resource </Button>                        
                    </CardText>
                    <Button color="success" onClick = {(event) => this.submitButton(event)}> Continue </Button>
                </CardBody>
            </Card>
          </Container>
        );
      }
}

export default TargetResource;