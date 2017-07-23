import React, { Component } from 'react';
import Calculator from './Calculator';

class AppTempratureCalc extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Temprature Calculator
        </p>
        <Calculator />
      </div>
    );
  }
}


export default AppTempratureCalc;