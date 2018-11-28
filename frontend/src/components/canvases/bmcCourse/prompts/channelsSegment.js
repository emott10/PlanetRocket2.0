import React, { Component } from 'react';
import { 
    Container, Button, Row, Input 
} from 'reactstrap';
import promptText from '../../../../config/promptText';
import CustomerRelationships from './customerRelationships';

class ChannelsSegment extends Component{
    constructor(props){
        super(props);

        this.state={
            textNum: 1,    
            btnMessage: "", 
            advertise: "",
            customerPurchase: "",
            deliver: "",

           
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
            return promptText.channelText.textOne;
        }
        else if(this.state.textNum == 2){
            return (
                <Container>
                <div>{promptText.channelText.textTwo.one}</div>
                <br/>
                <div>{promptText.channelText.textTwo.two}</div>   
                <br/>      
                <div>{promptText.channelText.textTwo.three}</div>
                </Container>
            );                 
        }
        else if(this.state.textNum == 3){
            return (
                <Container>
                <div>{promptText.channelText.textThree.one}</div>
                <br/>
                <div>{promptText.channelText.textThree.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="advertise" 
                    name="advertise"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.advertise}
                />                
                </Container>
            );          
         }
        else if(this.state.textNum == 4){
            return (
                <Container>
                <div>{promptText.channelText.textFour.one}</div>
                <br/>
                <div>{promptText.channelText.textFour.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="customerPurchase" 
                    name="customerPurchase"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.customerPurchase}
                />                
                </Container>
            );           
         }
        else if(this.state.textNum == 5){
            return (
                <Container>
                <div>{promptText.channelText.textFive.one}</div>
                <br/>
                <div>{promptText.channelText.textFive.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="deliver" 
                    name="deliver"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.deliver}
                />                
                </Container>
            );         
        }
    }

    handleInputChange (event) {
        if(event.target.id === "advertise"){
            this.setState({advertise: event.target.value});
        }
        else if(event.target.id === "customerPurchase"){
            this.setState({customerPurchase: event.target.value});
        }
        else if(event.target.id === "deliver"){
            this.setState({deliver: event.target.value});
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
            this.props.changeSegment(<CustomerRelationships {...this.props}
                                                            deliver={this.state.deliver}
                                                            customerPurchase={this.state.customerPurchase}
                                                            advertise={this.state.advertise}
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
          <Container className="channelsSegments">      
            <Row className="box" style={h2Style}>
                <h2> Channel Segments </h2>
            </Row> 
                <div> {this.setText()}</div>
            <Row className="btn">
                <Button style={btnStyle} onClick = {(event) => this.nextText(event)}> {this.checkEnd()} </Button>
            </Row>
          </Container>
        );
      }
}

export default ChannelsSegment;