import React, { Component } from 'react';
import Calculator from './Calculator';

const elementCalc = <Calculator />

class AppTempratureCalc extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Temprature Calculator
        </p>
        {elementCalc}
      </div>
    );
  }
}


export default AppTempratureCalc;