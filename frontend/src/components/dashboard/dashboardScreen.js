/*
    dashboardScreen: Manages the output for the dashboard
                     
*/

import React, { Component } from 'react';
import Dashboard from 'dashboard';
import { Container, Button } from 'reactstrap';


class DashboardScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            // TODO:
            // need to get apikey from client
            // need to know that we're logged in
            // -> going to pass api key down from app.js

            pageView:[],
        }
    }

    render(){
        return(
            <Container className="dashboardScreen">
                {this.state.pageView}
            </Container>
        )
    }
}

export default DashboardScreen;