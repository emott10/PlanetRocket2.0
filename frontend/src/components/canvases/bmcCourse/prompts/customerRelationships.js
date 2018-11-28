import React, { Component } from 'react';
import { 
    Container, Button, Row, Input 
} from 'reactstrap';
import promptText from '../../../../config/promptText';
import RevenueStreams from './revenueStreams';

class CustomerRelationships extends Component{
    constructor(props){
        super(props);

        this.state={
            textNum: 1,    
            btnMessage: "", 
            customerFocus: "",
            customerInteraction: "",
            interactionCost: "",

           
        }
        this.setText = this.setText.bind(this);
        this.nextText = this.nextText.bind(this);
        this.checkEnd = this.checkEnd.bind(this);
    }

    setText() {
        var inputStyle = {
            position: 'absolute', 
            bottom:550,
            width:700,
        }
        if(this.state.textNum == 1){
            return promptText.relationshipsText.textOne;
        }
        else if(this.state.textNum == 2){
            return (
                <Container>
                <div>{promptText.relationshipsText.textTwo.one}</div>
                <br/>
                <div>{promptText.relationshipsText.textTwo.two}</div>   
                <br/>      
                <div>{promptText.relationshipsText.textTwo.three}</div>
                </Container>
            );                 
        }
        else if(this.state.textNum == 3){
            return (
                <Container>
                <div>{promptText.relationshipsText.textThree.one}</div>
                <br/>
                <div>{promptText.relationshipsText.textThree.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="customerFocus" 
                    name="customerFocus"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.customerFocus}
                />                
                </Container>
            );          
         }
        else if(this.state.textNum == 4){
            return (
                <Container>
                <div>{promptText.relationshipsText.textFour.one}</div>
                <br/>
                <div>{promptText.relationshipsText.textFour.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="customerInteraction" 
                    name="customerInteraction"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.customerInteraction}
                />                
                </Container>
            );           
         }
        else if(this.state.textNum == 5){
            return (
                <Container>
                <div>{promptText.relationshipsText.textFive.one}</div>
                <br/>
                <div>{promptText.relationshipsText.textFive.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="interactionCost" 
                    name="interactionCost"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.interactionCost}
                />                
                </Container>
            );         
        }
    }

    handleInputChange (event) {
        if(event.target.id === "customerFocus"){
            this.setState({customerFocus: event.target.value});
        }
        else if(event.target.id === "customerInteraction"){
            this.setState({customerInteraction: event.target.value});
        }
        else if(event.target.id === "interactionCost"){
            this.setState({interactionCost: event.target.value});
        }
    };
    
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
            this.props.changeSegment(<RevenueStreams {...this.props}
                                                     interactionCost={this.state.interactionCost}
                                                     customerInteraction={this.state.customerInteraction}
                                                     customerFocus={this.state.customerFocus}
                                                     changeSegment={this.props.changeSegment.bind(this)}  />)
        }
        else{
            this.setState({textNum: this.state.textNum + 1});
        }
    }

    //details needs to change per thing.
    render() {   
        var btnStyle = {
            position: 'relative', 
            top:200, 
        }
        var h2Style ={
            background: '#4286f4',
            color: '#ffffff',
            width: '100%',
        }

        return (
          <Container className="RelationshipSegment">      
            <Row className="box" style={h2Style}>
                <h2> Relationships Segments </h2>
            </Row> 
                <div> {this.setText()}</div>
            <Row className="btn">
                <Button style={btnStyle} onClick = {(event) => this.nextText(event)}> {this.checkEnd()} </Button>
            </Row>
          </Container>
        );
      }
}

export default CustomerRelationships;