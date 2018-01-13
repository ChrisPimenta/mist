import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Flavour from './Flavour';

class FlavourGrid extends Component {
  renderFlavour(flavour, i) {
    return (
      <Col xs="3" className="flavourgrid-item" key={i}>
        <Flavour key={i} i={i} flavour={flavour} {...this.props}/>
      </Col>
    )
  }

  render() {
    return (
      <Container>
        <Row>
          {this.props.flavours.map((flavour, i) => this.renderFlavour(flavour, i))}          
        </Row>
      </Container>
    );
  }
}

export default FlavourGrid;