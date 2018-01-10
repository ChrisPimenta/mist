import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from '../styles.css';
import FlavourList from './FlavourList';
import CreateNewFlavour from './CreateNewFlavour';
import { Container, Row, Col, Button } from 'reactstrap';

class Main extends Component {
  render() {
    return (
      <Container>
        <Row className="app-heading-row">
          <Col>
          {/*Todo: Maybe make a component for header*/}
            <h1>
              <Link to="/">Mist</Link>              
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className='app-container-column'>
            <FlavourList />            
          </Col>
        </Row>
       
      </Container>
    );
  }
}

export default Main;
