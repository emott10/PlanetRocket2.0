import React, { Component } from 'react';
import { 
    Container, Button, Row, Input 
} from 'reactstrap';
import promptText from '../../../../config/promptText';
import KeyActivities from './keyActivities';

class RevenueStreams extends Component{
    constructor(props){
        super(props);

        this.state={
            textNum: 1,    
            btnMessage: "", 
            statusQuo: "",
            businessModel: "",
            getMoney: "",

            
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
                    id="statusQuo" 
                    name="statusQuo"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.statusQuo}
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
                    id="businessModel" 
                    name="businessModel"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.businessModel}
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
                    id="getMoney" 
                    name="getMoney"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.getMoney}
                />                
                </Row>
            );         
        }
    }

    handleInputChange (event) {
        if(event.target.id === "statusQuo"){
            this.setState({statusQuo: event.target.value});
        }
        else if(event.target.id === "businessModel"){
            this.setState({businessModel: event.target.value});
        }
        else if(event.target.id === "getMoney"){
            this.setState({getMoney: event.target.value});
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
            this.props.changeSegment(<KeyActivities     {...this.props}
                                                        statusQuo={this.state.statusQuo} 
                                                        businessModel={this.state.businessModel}
                                                        getMoney={this.state.getMoney}
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
            width: '100%',
            border: 'solid',    
        }
        return (
          <Container className="revenueStreams">      
            <Row className="box" style={h2Style}>
                <h2> Revenue Streams </h2>
            </Row> 
                <div> {this.setText()} </div>
            <Row className="btn">
                <Button style={btnStyle} onClick = {(event) => this.nextText(event)}> {this.checkEnd()} </Button>
            </Row>
          </Container>
        );
      }
}

export default RevenueStreams;