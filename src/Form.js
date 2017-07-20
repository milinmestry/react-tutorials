import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FlavorForm from './FlavorForm';



ReactDOM.render(
  <FlavorForm />,
  document.getElementById('form')
);

class Form extends Component {
  render() {
    return (
      <div className="App">
        <div id="textbox"></div>
        <div id="select"></div>
      </div>

    );
  }
}

export default Form;