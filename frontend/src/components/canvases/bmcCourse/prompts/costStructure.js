import React, { Component } from 'react';
import { 
    Container, Button, Col, Row, Modal, 
    ModalHeader, ModalBody, ModalFooter, 
    Form, FormGroup, Label, Input 
} from 'reactstrap';
import promptText from '../../../../config/promptText';
import Dashboard from '../../../dashboard/dashboard';

class CostStructure extends Component{
    constructor(props){
        super(props);

        this.state={
            textNum: 1,    
            btnMessage: "", 
            fundamentalCosts: "",
            costsInvolved: "",
            costStructure: "",

            //okay so this is going to be a bitch. 
            //1 do I want it to be a bunch of components? or maybe I want to render things based on whats happening?
            //Okay so I wanty this to be one component. that is going to switch out messages depending on where we are
            //I need someting to keep track. Some kind of array? 
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
                    id="fundamentalCosts" 
                    name="fundamentalCosts"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.fundamentalCosts}
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
                    id="costsInvolved" 
                    name="costsInvolved"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.costsInvolved}
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
                    id="costStructure" 
                    name="costStructure"
                    style={inputStyle}
                    onChange = {this.handleInputChange.bind(this)}
                    value={this.state.costStructure}
                />                
                </Row>
            );         
        }
    }

    handleInputChange (event) {
        if(event.target.id === "fundamentalCosts"){
            this.setState({fundamentalCosts: event.target.value});
        }
        else if(event.target.id === "costsInvolved"){
            this.setState({costsInvolved: event.target.value});
        }
        else if(event.target.id === "costStructure"){
            this.setState({costStructure: event.target.value});
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
            this.props.changeSegment(<Dashboard     {...this.props}
                                                    fundamentalCosts={this.state.fundamentalCosts} 
                                                    costsInvolved={this.state.costsInvolved}
                                                    costStructure={this.state.costStructure}
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
            position: 'absolute', 
            bottom:500, 
        }
        var h2Style ={
            background: '#4286f4',
            color: '#ffffff',
            width: '100%',
            border: 'solid',    
        }
        return (
          <Container className="costStructure">      
            <Row className="box" style={h2Style}>
                <h2> Cost Structure </h2>
            </Row> 
                <div> {this.setText()} </div>
            <Row className="btn">
                <Button style={btnStyle} onClick = {(event) => this.nextText(event)}> {this.checkEnd()} </Button>
            </Row>
          </Container>
        );
      }
}

export default CostStructure;