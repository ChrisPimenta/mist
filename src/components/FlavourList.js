import React, { Component } from 'react';
import Flavour from './Flavour';

class FlavourList extends Component {
  render() {
    //Todo: Replace with flavours from state
    const array1 = [1, 2, 3, 4];
    return (
      <div>
        {
          array1.map((i) => <Flavour key={i} />)
        }
      </div>
    );
  }
}

export default FlavourList;
