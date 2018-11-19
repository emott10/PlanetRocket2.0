import './splash.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {SectionsContainer, Section, Header} from 'react-fullpage';
//import ReactFullpage from '@fullpage/react-fullpage';
import { Container, Row, Col } from 'reactstrap';
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
            <Container>              
            <Row>
                <Col sm="12" md={{ size: 6, offset: 4}}>
                  <h1>This is where the text will go!</h1>
                </Col>
              </Row>
              <Row>
                <Col xs={{ size: 6, offset: 4}} md={{ size: 4, offset: 5}}>
                  <Button className="text-center" variant="extendedFab" color="primary" size="large" onClick={this.routeChange}>
                    Join the Team!
                  </Button>
                </Col>
              </Row>
            </Container>
          </Section>
          <Section id="page2">
            <Container>              
              <Row>
                <Col sm="12" md={{ size: 6, offset: 4}}>
                  <h1>This is where the text will go!</h1>
                </Col>
              </Row>
            </Container>
          </Section>
          <Section id="page3">
            <Container>              
              <Row>
                <Col sm="12" md={{ size: 6, offset: 4}}>
                  <h1>This is where the text will go!</h1>
                </Col>
              </Row>
            </Container>
          </Section>
          <Section id="page4">
            <Container>              
              <Row>
                <Col sm="12" md={{ size: 6, offset: 4}}>
                  <h1>This is where the text will go!</h1>
                </Col>
              </Row>
              <Row>
                <Col sm={{ size: 6, offset: 5}} md={{ size: 5, offset: 5}} lg={{ size: 6, offset: 5}} xl={{ size: 6, offset: 5}}>
                  <Button variant="extendedFab" color="primary" size="large">
                    Join the Team!
                  </Button>
                </Col>
              </Row>
            </Container>
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