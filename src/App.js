import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import ButtonToggle from './ButtonToggle';


function formatName(User) {
  return User.firstName + ' ' + User.lastName;
}

const user = {
  firstName: 'Milin',
  lastName: 'Mestry'
};

const elementWelcomeUser = (
  <h1>Hello {formatName(user)}!</h1>
);

function tick() {
  ReactDOM.render(
    <Clock />,
    document.getElementById('clock-tick')
  );
};

setInterval(tick, 1000);

ReactDOM.render(
  <ButtonToggle />,
  document.getElementById('toggle-button')
);

/**
 * Component and props demo
 */
function Welcome(props) {
  return <h3>Welcome, {props.name}</h3>;
}


const elementWelcomeProps = <Welcome name="Bhargavi" />

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {elementWelcomeUser}
        {elementWelcomeProps}
      </div>
    );
  }
}


export default App;
// export default Comment;
