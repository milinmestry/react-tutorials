import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import FlavorForm from './FlavorForm';
import NameForm from './NameForm';


const elementTextbox = <NameForm />
const elementSelect = <FlavorForm />


class Form extends Component {
  render() {
    return (
      <div className="App">
        <div id="textbox">{elementTextbox}</div>
        <div id="select">{elementSelect}</div>
      </div>

    );
  }
}

export default Form;
