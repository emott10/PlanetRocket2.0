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
      anchors:              ['passion', 'process', 'success'],
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
            <Container className="h-100">              
              <Row className="h-75 align-items-center">
                  <Col  className="splashHeaders" sm={{ size: 12}} md={{ size: 12, offset: 2}} lg={{ size: 8, offset: 3}}>
                    <h1 className="splashText">Your Passion!</h1>
                    <h3 className="splashText">Our course is the simplest way to go from idea to a filled out canvas in the shorest amount of time.</h3>
                    <Button className="text-center" variant="extendedFab" color="primary" size="large" onClick={this.routeChange}>
                      Join the Team!
                    </Button>
                  </Col>
              </Row>
            </Container>
          </Section>
          <Section id="page2">
            <Container className="h-100">              
              <Row className="h-75 align-items-center">
                  <Col  className="splashHeaders" sm={{ size: 12}} md={{ size: 12, offset: 2}} lg={{ size: 8, offset: 3}}>
                    <h1 className="splashText">Our Process!</h1>
                    <h3 className="splashText">Learn, answer questions, and think deeply about your business. We will guide every step of the way.</h3>
                    <Button className="text-center" variant="extendedFab" color="primary" size="large" onClick={this.routeChange}>
                      Join the Team!
                    </Button>
                  </Col>
              </Row>
            </Container>
          </Section>
          <Section id="page3">
            <Container className="h-100">              
              <Row className="h-75 align-items-center">
                  <Col  className="splashHeaders" sm={{ size: 12}} md={{ size: 12, offset: 2}} lg={{ size: 8, offset: 3}}>
                    <h1 className="splashText">Together we Succeed!</h1>
                    <h3 className="splashText">Go from world changing business idea to an actionable plan in a matter of minutes. For free.</h3>
                    <Button className="text-center" variant="extendedFab" color="primary" size="large" onClick={this.routeChange}>
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