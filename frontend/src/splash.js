import './splash.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {SectionsContainer, Section, Header} from 'react-fullpage';
//import ReactFullpage from '@fullpage/react-fullpage';
import { Grid, Row, Col } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import HeaderAppBar from './components/AppBar';


class Splash extends React.Component{

  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
  }
  
  routeChange(){
    this.props.history.push("/register");
  }

  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
      navigation:           true,
      sectionPaddingTop:    '100px',
      arrowNavigation:      true
    };
 
    return (
      <div>
        <Header>
            <HeaderAppBar />
        </Header>

        <SectionsContainer {...options}>
          <Section id="page1">
            <Grid>              
              <Row>
                <Col xs={10} sm={8} md={6} lg={8} xsOffset={1} smOffset={4} mdOffset={5} lgOffset={3}>
                  <h1 >This is where the text will go!</h1>
                  <Button variant="extendedFab" color="primary" size="large" onClick={this.routeChange}>Join the team!</Button>
                </Col>
              </Row>
            </Grid>
          </Section>
          <Section id="page2">
            <Grid>              
              <Row>
                <Col xs={10} sm={8} md={6} lg={8} xsOffset={1} smOffset={4} mdOffset={5} lgOffset={3}>
                  <h1>This is where the text will go!</h1>
                </Col>
              </Row>
            </Grid>
          </Section>
          <Section id="page3">
            <Grid>              
              <Row>
                <Col xs={10} sm={8} md={6} lg={8} xsOffset={1} smOffset={4} mdOffset={5} lgOffset={3}>
                  <h1>This is where the text will go!</h1>
                </Col>
              </Row>
            </Grid>
          </Section>
          <Section id="page4">
            <Grid>              
              <Row>
                <Col xs={10} sm={8} md={6} lg={8} xsOffset={1} smOffset={4} mdOffset={5} lgOffset={3}>
                  <h1>This is where the text will go!</h1>
                  <Button variant="extendedFab" color="primary" size="large">
                    Join the Team!
                  </Button>
                </Col>
              </Row>
            </Grid>
          </Section>
        </SectionsContainer>
      </div>
    );
  }
}

ReactDOM.render(
  <Splash />,
  document.getElementById('root')
);

export default Splash;