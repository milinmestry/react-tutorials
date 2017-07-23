import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import FlavorForm from './FlavorForm';
import NameForm from './NameForm';
import Reservation from './Reservation';


const elementTextbox = <NameForm />
const elementSelect = <FlavorForm />
const elementReservation = <Reservation />


class Form extends Component {
  render() {
    return (
      <div className="App">
        <h3>Forms</h3>
        <p>
          Overall, this makes it so that &lt;input type="text"&gt;, &lt;textarea&gt;, and &lt;select&gt;
          all work very similarly - they all accept a <strong>value attribute</strong> that
          you can use to implement a controlled component.
        </p>
        <div id="textbox">{elementTextbox}</div>
        <div id="select">{elementSelect}</div>
        <div>{elementReservation}</div>
      </div>

    );
  }
}

export default Form;
