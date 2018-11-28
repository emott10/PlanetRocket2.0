import React, { Component } from 'react';
import { 
    Container, Button, Row, Input 
} from 'reactstrap';
import promptText from '../../../../config/promptText';
import Dashboard from '../../../dashboard/dashboard';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";

class CostStructure extends Component{
    constructor(props){
        super(props);

        this.state={
            textNum: 1,    
            btnMessage: "", 
            fundamentalCosts: "",
            costsInvolved: "",
            costStructure: "",

            
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

    setButton(){ 
        var btnStyle = {
            position: 'relative', 
            top:200, 
        }    
        if(this.state.textNum + 1 > 5){
            return(
            <ListItem button component={Link} to="/dashboard" type="submit" onClick={(event) => this.nextText(event)}> 
                <Button>Submit Course</Button> 
            </ListItem>
            )
        }
        else{
            return(
            <Button style={btnStyle} onClick = {(event) => this.nextText(event)}> {this.checkEnd()} </Button>
            )
        }
    }

    //details needs to change per thing.
    render() {
        
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
                {this.setButton()}
            </Row>
          </Container>
        );
      }
}

export default CostStructure;