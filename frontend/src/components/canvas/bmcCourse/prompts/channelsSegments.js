import React, { Component } from 'react';
import { 
    Container, Button, Col, Row, Modal, 
    ModalHeader, ModalBody, ModalFooter, 
    Form, FormGroup, Label, Input 
} from 'reactstrap';
import promptText from '../../../../config/promptText';
import ValuePropositions from './valueProposition';

class ChannelsSegment extends Component{
    constructor(props){
        super(props);

        this.state={
            textNum: 1,    
            btnMessage: "", 

            //okay so this is going to be a bitch. 
            //1 do I want it to be a bunch of components? or maybe I want to render things based on whats happening?
            //Okay so I wanty this to be one component. that is going to switch out messages depending on where we are
            //I need someting to keep track. Some kind of array? 
        }
        this.setText = this.setText.bind(this);
        this.nextText = this.nextText.bind(this);
        this.checkEnd = this.checkEnd.bind(this);
    }

    setText() {
        if(this.state.textNum == 1){
            return promptText.channelText.textOne;
        }
        else if(this.state.textNum == 2){
            return promptText.channelText.textTwo;
        }
        else if(this.state.textNum == 3){
            return promptText.channelText.textThree;
        }
        else if(this.state.textNum == 4){
            return promptText.channelText.textFour;
        }
        else if(this.state.textNum == 5){
            return promptText.channelText.textFive;
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
            this.props.changeSegment(<ValuePropositions />)
        }
        else{
            this.setState({textNum: this.state.textNum + 1});
        }
    }

    //details needs to change per thing.
    render() {     
        return (
          <Container className="channelsSegments">      
            <Container className="box">
                <h2> Customer Segments </h2>
                <h5> {this.setText()}</h5>
            </Container> 
            <Container className="btn">
                <Button onClick = {(event) => this.nextText(event)}> {this.checkEnd()} </Button>
            </Container>
          </Container>
        );
      }
}

export default ChannelsSegment;