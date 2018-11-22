import './splash.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {SectionsContainer, Section, Header} from 'react-fullpage';
//import ReactFullpage from '@fullpage/react-fullpage';
import { Container, Row, Col } from 'reactstrap';
import Button from '@material-ui/core/Button';
import HeaderAppBar from '../AppBar';


class Splash extends React.Component{

  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
  }
  
  routeChange(){
    this.props.history.push("/dashboard");
  }

  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['passion', 'process', 'succeed'],
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
            <Container className="splashContainer h-100">              
              <Row className="h-50">
                  <Col  className="align-middle" sm={{ size: 12}} md={{ size: 12, offset: 0}} lg={{ size: 10, offset: 1}}>
                    <h1 className="splashHeaders align-top" id="header1">Your Passion!</h1>
                  </Col>
              </Row>
              <Row className="align-items-cneter">
                <Col sm={{ size: 12}} md={{ size: 12, offset: 0}} lg={{ size: 10, offset: 1}}>
                  <h2>Our course is the simplest way to go from idea to a filled out canvas in the shorest amount of time.</h2>
                  <br/><br/>
                  <Button style={{fontSize: '30px'}} className="btn-success" variant="contained" size="large" onClick={this.routeChange}>
                    Start
                  </Button>
                </Col>
              </Row>
            </Container>
          </Section>
          <Section id="page2">
            <Container className="splashContainer h-100">              
              <Row className="h-100 align-items-center">
                  <Col sm={{ size: 12}} md={{ size: 12, offset: 0}} lg={{ size: 8, offset: 3}}>
                    <h1 className="splashHeaders">Our Process!</h1>
                    <br/>
                    <h2>Learn, answer questions, and think deeply about your business. We will guide every step of the way.</h2>
                    <br/><br/>                                  
                    <Button style={{fontSize: '30px'}} className="btn-success" variant="contained" size="large" onClick={this.routeChange}>
                      Start
                    </Button>
                  </Col>
              </Row>
            </Container>
          </Section>
          <Section id="page3">
            <Container className="splashContainer h-100">              
              <Row className="h-100 align-items-center">
                  <Col sm={{ size: 12}} md={{ size: 12, offset: 0 }} lg={{ size: 8, offset: 3}}>
                    <h1 className="splashHeaders">Together, we Succeed!</h1>
                    <br/>
                    <br/>
                    <h2>Go from world changing business idea to an actionable plan in a matter of minutes. For free.</h2>
                    <br/><br/>
                    <Button style={{fontSize: '30px'}} className="btn-success" variant="contained" size="large" onClick={this.routeChange}>
                      Start
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