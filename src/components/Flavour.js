import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Flavour extends Component {
  render() {
    const { flavour, i, comments } = this.props;

    return (
      <Card className="flavour-card">
        <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          <span key={flavour.likes} className="likes-heart">{flavour.likes}</span>
        </CSSTransitionGroup>
        
        <Link to={`/flavourDetail/${flavour.code}`}>
          <CardImg top width="100%" src={flavour.image_src} alt={`${flavour.name} image.`} />
        </Link>
        <CardBody>
          <CardTitle>{flavour.name}</CardTitle>
          <CardText className="flavour-desc">{flavour.desc}</CardText>
          <button onClick={() => { this.props.increment(i) }} className="likes like-button">&#10084; {flavour.likes}</button>
        </CardBody>
      </Card>
    );
  }
}

export default Flavour;
