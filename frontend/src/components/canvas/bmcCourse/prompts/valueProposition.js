import React, { Component } from 'react';
import { 
    Container, Button, Col, Row, Modal, 
    ModalHeader, ModalBody, ModalFooter, 
    Form, FormGroup, Label, Input 
} from 'reactstrap';
import promptText from '../../../../config/promptText';
import ChannelsSegment from './channelsSegment';

class ValuePropositions extends Component{
    constructor(props){
        super(props);

        this.state={
            textNum: 1,    
            btnMessage: "", 
        }
        this.setText = this.setText.bind(this);
        this.nextText = this.nextText.bind(this);
        this.checkEnd = this.checkEnd.bind(this);
    }

    setText() {
        if(this.state.textNum == 1){
            return promptText.valueText.textOne;
        }
        else if(this.state.textNum == 2){
            return promptText.valueText.textTwo;
        }
        else if(this.state.textNum == 3){
            return promptText.valueText.textThree;
        }
        else if(this.state.textNum == 4){
            return promptText.valueText.textFour;
        }
        else if(this.state.textNum == 5){
            return promptText.valueText.textFive;
        }
    }

    checkEnd() {
        if(this.state.textNum + 1 > 5){
            return "continue to next section";
        }
        else{
            return "continue";
        }
    }

    nextText(event){
        if(this.state.textNum + 1 > 5){
            this.props.changeSegment(<ChannelsSegment />);
        }
        else{
            this.setState({textNum: this.state.textNum + 1});
        }
    }

    //details needs to change per thing.
    render() {
        return (
            <Container className="valueSegments">      
            <Container className="box">
                <h2> Value Propositions </h2>
                <h5> {this.setText()}</h5>
            </Container> 
            <Container className="btn">
                <Button onClick = {(event) => this.nextText(event)}> {this.checkEnd()} </Button>
            </Container>
          </Container>
        );
      }
}

export default ValuePropositions;