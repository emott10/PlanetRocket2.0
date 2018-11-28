import React, { Component } from 'react';
import { 
    Container, Button, Row, Input 
} from 'reactstrap';
import promptText from '../../../../config/promptText';
import ChannelsSegment from './channelsSegment';

class ValuePropositions extends Component{
    constructor(props){
        super(props);

        this.state={
            textNum: 1,    
            btnMessage: "", 
            customerProblem: "",
            benefits: "",
            unique: "",
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
            return (
                <Container>
                <div>{promptText.valueText.textOne.one}</div>
                <br/>
                <div>{promptText.valueText.textOne.two}</div>         
                </Container>
            );
        }
        else if(this.state.textNum == 2){
            return (
                <Container>
                <div>{promptText.valueText.textTwo.one}</div>
                <br/>
                <div>{promptText.valueText.textTwo.two}</div>         
                </Container>
            );                 
        }
        else if(this.state.textNum == 3){
            return (
                <Container>
                <div>{promptText.valueText.textThree.one}</div>
                <br/>
                <div>{promptText.valueText.textThree.two}</div>
                <br/>
                <div>{promptText.valueText.textThree.three}</div> 
                <Input 
                    type="text" 
                    id="customerProblem" 
                    name="customerProblem"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.customerProblem}
                />                
                </Container>           
            );          
         }
        else if(this.state.textNum == 4){
            return (
                <Container>
                <div>{promptText.valueText.textFour.one}</div>
                <br/>
                <div>{promptText.valueText.textFour.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="benefits" 
                    name="benefits"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.benefits}
                />                
                </Container>
            );           
         }
        else if(this.state.textNum == 5){
            return (
                <Container>
                <div>{promptText.valueText.textFive.one}</div>
                <br/>
                <div>{promptText.valueText.textFive.two}</div>
                <br/>
                <Input 
                    type="text" 
                    id="unique" 
                    name="unique"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.unique}
                />                
                </Container>
            );         
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
            this.props.changeSegment(<ChannelsSegment {...this.props} 
                                                      unique={this.state.unique}
                                                      benefits={this.state.benefits}
                                                      customerProblem={this.state.customerProblem}
                                                      changeSegment={this.props.changeSegment.bind(this)} 
                                                      />);
        }
        else{
            this.setState({textNum: this.state.textNum + 1});
        }
    }

    handleInputChange (event) {
        if(event.target.id === "customerProblem"){
            this.setState({customerProblem: event.target.value});
        }
        else if(event.target.id === "benefits"){
            this.setState({benefits: event.target.value});
        }
        else if(event.target.id === "unique"){
            this.setState({unique: event.target.value});
        }
    };

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
            <Container className="valueSegments">      
            <Row className="box" style={h2Style}>
                <h2> Value Propositions </h2>
            </Row> 
                <div> {this.setText()}</div>
            <Row className="btn">
                <Button style={btnStyle} onClick = {(event) => this.nextText(event)}> {this.checkEnd()} </Button>
            </Row>
          </Container>
        );
      }
}

export default ValuePropositions;