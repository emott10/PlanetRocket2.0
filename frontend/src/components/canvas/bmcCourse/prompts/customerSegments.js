import React, { Component } from 'react';
import { 
    Container, Button, Col, Row, Modal, 
    ModalHeader, ModalBody, ModalFooter, 
    Form, FormGroup, Label, Input 
} from 'reactstrap';
import promptText from '../../../../config/promptText';
import ValuePropositions from './valueProposition';

class CustomerSegments extends Component{
    constructor(props){
        super(props);

        this.state={
            textNum: 1,    
            btnMessage: "", 
            textOne: "Don’t be a solution looking for a problem. Before you decide what you are selling, you have to think about who you are going to sell it to and what problem of theirs are you solving.",


            //okay so this is going to be a bitch. 
            //1 do I want it to be a bunch of components? or maybe I want to render things based on whats happening?
            //Okay so I wanty this to be one component. that is going to switch out messages depending on where we are
            //I need someting to keep track. Some kind of array? 
        }
        this.setText = this.setText.bind(this);
        this.nextText = this.nextText.bind(this);
        this.checkEnd = this.checkEnd.bind(this);
        this.formatText = this.formatText.bind(this);
    }

    formatText(text){
        text.split('\n').map(function(item, key) {
            return (
                <span key={key}>
                    {item}
                    hey
                    <br/>
                </span>
                );
            })
    }

    setText() {
        if(this.state.textNum == 1){
            this.formatText(this.state.textOne);
            //return promptText.customerText.textOne;
        }
        else if(this.state.textNum == 2){
            return promptText.customerText.textTwo;
        }
        else if(this.state.textNum == 3){
            return promptText.customerText.textThree;
        }
        else if(this.state.textNum == 4){
            return promptText.customerText.textFour;
        }
        else if(this.state.textNum == 5){
            return promptText.customerText.textFive;
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
            this.props.changeSegment(<ValuePropositions changeSegment={this.props.changeSegment.bind(this)} />)
        }
        else{
            this.setState({textNum: this.state.textNum + 1});
        }
    }

    //details needs to change per thing.
    render() {

        return (
          <Container className="customerSegments">      
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

export default CustomerSegments;