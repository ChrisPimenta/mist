import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Components
import FlavourDetail from './FlavourDetail';
import FlavourGrid from './FlavourGrid';

class Main extends Component {
  render() {
    return (      
      <Switch>
        <Redirect exact path="/" to="/flavourGrid"/>
        <Route exact path="/flavourGrid" render={() => <FlavourGrid {...this.props}/>} />
        <Route path="/flavourDetail/:code" render={() => <FlavourDetail {...this.props}/>} />  
      </Switch>
    );
  }
}

export default Main;
