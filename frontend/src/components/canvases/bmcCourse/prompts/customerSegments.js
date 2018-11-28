import React, { Component } from 'react';
import { 
    Container, Button, Row, Input 
} from 'reactstrap';
import promptText from '../../../../config/promptText';
import ValuePropositions from './valueProposition';

class CustomerSegments extends Component{
    constructor(props){
        super(props);

        this.state={
            textNum: 1,    
            btnMessage: "", 
            idealCustomer: "",
            idealCustomerSegments: "",
            marketType: "",

            
        }
        this.setText = this.setText.bind(this);
        this.nextText = this.nextText.bind(this);
        this.checkEnd = this.checkEnd.bind(this);
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

    setText() {
        var inputStyle = {
            position: 'absolute', 
            bottom:550,
            width:700,
        }
    

        if(this.state.textNum == 1){
            return promptText.customerText.textOne;
        }
        else if(this.state.textNum == 2){
            return (
                <Row>
                <div>{promptText.customerText.textTwo.one}</div>
                <br/>
                <div>{promptText.customerText.textTwo.two}</div>         
                </Row>
            );                 
        }
        else if(this.state.textNum == 3){
            return (
                <Row>
                <div>{promptText.customerText.textThree.one}</div>
                <br/>
                <div>{promptText.customerText.textThree.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="idealCustomer" 
                    name="idealCustomer"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.idealCustomer}
                />                
                </Row>
            );          
         }
        else if(this.state.textNum == 4){
            return (
                <Row>
                <div>{promptText.customerText.textFour.one}</div>
                <br/>
                <div>{promptText.customerText.textFour.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="idealCustomerSegments" 
                    name="idealCustomerSegments"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.idealCustomerSegments}
                />                
                </Row>
            );           
         }
        else if(this.state.textNum == 5){
            return (
                <Row>
                <div>{promptText.customerText.textFive.one}</div>
                <br/>
                <div>{promptText.customerText.textFive.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="marketType" 
                    name="marketType"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.marketType}
                />                
                </Row>
            );         
        }
    }

    handleInputChange (event) {
        if(event.target.id === "idealCustomer"){
            this.setState({idealCustomer: event.target.value});
        }
        else if(event.target.id === "idealCustomerSegments"){
            this.setState({idealCustomerSegments: event.target.value});
        }
        else if(event.target.id === "marketType"){
            this.setState({marketType: event.target.value});
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

    nextText(){
        if(this.state.textNum + 1 > 5){
            this.props.changeSegment(<ValuePropositions idealCustomer={this.state.idealCustomer} 
                                                        idealCustomerSegments={this.state.idealCustomerSegments}
                                                        marketType={this.state.marketType}
                                                        changeSegment={this.props.changeSegment.bind(this)} />)
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
            width: 1106,
            border: '1px solid blue',
        }
        var conStyle={
            border: '2px solid #000000',
            height: 450,
        }
        return (
          <Container className="customerSegments" style={conStyle}>      
            <Row className="box" style={h2Style}>
                <h2> Customer Segments </h2>
            </Row> 
                <div> {this.setText()} </div>
            <Row className="btn">
                <Button style={btnStyle} onClick = {(event) => this.nextText(event)}> {this.checkEnd()} </Button>
            </Row>
          </Container>
        );
      }
}

export default CustomerSegments;