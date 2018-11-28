import React, { Component } from 'react';
import { 
    Container, Button, Row, Input 
} from 'reactstrap';
import promptText from '../../../../config/promptText';
import CostStructure from './costStructure';

class KeyPartners extends Component{
    constructor(props){
        super(props);

        this.state={
            textNum: 1,    
            btnMessage: "", 
            yourKeyPartners: "",
            weaknesses: "",
            partnersKeyActivities: "",
            
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
            return promptText.keyPartners.textOne;
        }
        else if(this.state.textNum == 2){
            return (
                <Row>
                <div>{promptText.keyPartners.textTwo.one}</div>
                <br/>
                <div>{promptText.keyPartners.textTwo.two}</div> 
                <br/>
                <div>{promptText.keyPartners.textTwo.two}</div>        
                </Row>
            );                 
        }
        else if(this.state.textNum == 3){
            return (
                <Row>
                <div>{promptText.keyPartners.textThree.one}</div>
                <br/>
                <div>{promptText.keyPartners.textThree.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="yourKeyPartners" 
                    name="yourKeyPartners"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.yourKeyPartners}
                />                
                </Row>
            );          
         }
        else if(this.state.textNum == 4){
            return (
                <Row>
                <div>{promptText.keyPartners.textFour.one}</div>
                <br/>
                <div>{promptText.keyPartners.textFour.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="weaknesses" 
                    name="weaknesses"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.weaknesses}
                />                
                </Row>
            );           
         }
        else if(this.state.textNum == 5){
            return (
                <Row>
                <div>{promptText.keyPartners.textFive.one}</div>
                <br/>
                <div>{promptText.keyPartners.textFive.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="partnersKeyActivities" 
                    name="partnersKeyActivities"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.partnersKeyActivities}
                />                
                </Row>
            );         
        }
    }

    handleInputChange (event) {
        if(event.target.id === "yourKeyPartners"){
            this.setState({yourKeyPartners: event.target.value});
        }
        else if(event.target.id === "weaknesses"){
            this.setState({weaknesses: event.target.value});
        }
        else if(event.target.id === "partnersKeyActivities"){
            this.setState({partnersKeyActivities: event.target.value});
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
            this.props.changeSegment(<CostStructure {...this.props}
                                                    yourKeyPartners={this.state.yourKeyPartners} 
                                                    weaknesses={this.state.weaknesses}
                                                    partnersKeyActivities={this.state.partnersKeyActivities}
                                                    changeSegment={this.props.changeSegment.bind(this)} 
                                                    />)
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
            border: 'solid',    
        }
        return (
          <Container className="keyPartners">      
            <Row className="box" style={h2Style}>
                <h2> Key Partners </h2>
            </Row> 
                <div> {this.setText()} </div>
            <Row className="btn">
                <Button style={btnStyle} onClick = {(event) => this.nextText(event)}> {this.checkEnd()} </Button>
            </Row>
          </Container>
        );
      }
}

export default KeyPartners;