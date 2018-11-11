import React, { Component } from 'react';
import axios from 'axios';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';

class IdeaScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            ideas:[]
        }
    }

    render(){
        return(
            <h1> hello </h1>
        )
      }
}

export default IdeaScreen;