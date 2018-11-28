import React, { Component } from 'react';
import { 
    Container, Button, Row, Input 
} from 'reactstrap';
import promptText from '../../../../config/promptText';
import KeyResources from './keyResources';

class KeyActivities extends Component{
    constructor(props){
        super(props);

        this.state={
            textNum: 1,    
            btnMessage: "", 
            activitiesForValue: "",
            activitiesForRelationship: "",
            activitiesForChannels: "",

   
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
            return promptText.keyActivities.textOne;
        }
        else if(this.state.textNum == 2){
            return (
                <Row>
                <div>{promptText.keyActivities.textTwo.one}</div>
                <br/>
                <div>{promptText.keyActivities.textTwo.two}</div> 
                <br/>
                <div>{promptText.keyActivities.textTwo.two}</div>        
                </Row>
            );                 
        }
        else if(this.state.textNum == 3){
            return (
                <Row>
                <div>{promptText.keyActivities.textThree.one}</div>
                <br/>
                <div>{promptText.keyActivities.textThree.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="activitiesForValue" 
                    name="activitiesForValue"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.activitiesForValue}
                />                
                </Row>
            );          
         }
        else if(this.state.textNum == 4){
            return (
                <Row>
                <div>{promptText.keyActivities.textFour.one}</div>
                <br/>
                <div>{promptText.keyActivities.textFour.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="activitiesForRelationship" 
                    name="activitiesForRelationship"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.activitiesForRelationship}
                />                
                </Row>
            );           
         }
        else if(this.state.textNum == 5){
            return (
                <Row>
                <div>{promptText.keyActivities.textFive.one}</div>
                <br/>
                <div>{promptText.keyActivities.textFive.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="activitiesForChannels" 
                    name="activitiesForChannels"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.activitiesForChannels}
                />                
                </Row>
            );         
        }
    }

    handleInputChange (event) {
        if(event.target.id === "activitiesForValue"){
            this.setState({activitiesForValue: event.target.value});
        }
        else if(event.target.id === "activitiesForRelationship"){
            this.setState({activitiesForRelationship: event.target.value});
        }
        else if(event.target.id === "activitiesForChannels"){
            this.setState({activitiesForChannels: event.target.value});
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
            this.props.changeSegment(<KeyResources  {...this.props}
                                                    activitiesForValue={this.state.activitiesForValue} 
                                                    activitiesForRelationship={this.state.activitiesForRelationship}
                                                    activitiesForChannels={this.state.activitiesForChannels}
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
          <Container className="keyActivities">      
            <Row className="box" style={h2Style}>
                <h2> Key Activities </h2>
            </Row> 
                <div> {this.setText()} </div>
            <Row className="btn">
                <Button style={btnStyle} onClick = {(event) => this.nextText(event)}> {this.checkEnd()} </Button>
            </Row>
          </Container>
        );
      }
}

export default KeyActivities;