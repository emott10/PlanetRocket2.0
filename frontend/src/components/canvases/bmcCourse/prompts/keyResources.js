import React, { Component } from 'react';
import { 
    Container, Button, Row, Input 
} from 'reactstrap';
import promptText from '../../../../config/promptText';
import KeyPartners from './keyPartners';

class KeyResources extends Component{
    constructor(props){
        super(props);

        this.state={
            textNum: 1,    
            btnMessage: "", 
            resourcesForValueProp: "",
            resourcesToAcquire: "",
            resourcesForCustomerSeg: "",

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
            return promptText.keyResources.textOne;
        }
        else if(this.state.textNum == 2){
            return (
                <Row>
                <div>{promptText.keyResources.textTwo.one}</div>
                <br/>
                <div>{promptText.keyResources.textTwo.two}</div> 
                <br/>
                <div>{promptText.keyResources.textTwo.two}</div>        
                </Row>
            );                 
        }
        else if(this.state.textNum == 3){
            return (
                <Row>
                <div>{promptText.keyResources.textThree.one}</div>
                <br/>
                <div>{promptText.keyResources.textThree.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="resourcesForValueProp" 
                    name="resourcesForValueProp"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.resourcesForValueProp}
                />                
                </Row>
            );          
         }
        else if(this.state.textNum == 4){
            return (
                <Row>
                <div>{promptText.keyResources.textFour.one}</div>
                <br/>
                <div>{promptText.keyResources.textFour.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="resourcesToAcquire" 
                    name="resourcesToAcquire"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.resourcesToAcquire}
                />                
                </Row>
            );           
         }
        else if(this.state.textNum == 5){
            return (
                <Row>
                <div>{promptText.keyResources.textFive.one}</div>
                <br/>
                <div>{promptText.keyResources.textFive.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="resourcesForCustomerSeg" 
                    name="resourcesForCustomerSeg"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.resourcesForCustomerSeg}
                />                
                </Row>
            );         
        }
    }

    handleInputChange (event) {
        if(event.target.id === "resourcesForValueProp"){
            this.setState({resourcesForValueProp: event.target.value});
        }
        else if(event.target.id === "resourcesToAcquire"){
            this.setState({resourcesToAcquire: event.target.value});
        }
        else if(event.target.id === "resourcesForCustomerSeg"){
            this.setState({resourcesForCustomerSeg: event.target.value});
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
            this.props.changeSegment(<KeyPartners   {...this.props}
                                                    resourcesForValueProp={this.state.resourcesForValueProp} 
                                                    resourcesToAcquire={this.state.resourcesToAcquire}
                                                    resourcesForCustomerSeg={this.state.resourcesForCustomerSeg}
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
          <Container className="keyResources">      
            <Row className="box" style={h2Style}>
                <h2> Key Resources </h2>
            </Row> 
                <div> {this.setText()} </div>
            <Row className="btn">
                <Button style={btnStyle} onClick = {(event) => this.nextText(event)}> {this.checkEnd()} </Button>
            </Row>
          </Container>
        );
      }
}

export default KeyResources;