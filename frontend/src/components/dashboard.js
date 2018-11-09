import React, {Component} from 'react';
import {
    Container, Col, Row,
    Button,
  } from 'reactstrap';

class Dashboard extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container className="dashboard">
                <Row>   
                    <Col>
                        <Button  > Go to Your previous screen</Button>
                    </Col>
                    <Col>
                        <Button  > Start a new Canvas </Button>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Dashboard;

