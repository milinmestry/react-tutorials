import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import ButtonToggle from './ButtonToggle';
import LoginControl from './LoginControl';
import NameForm from './NameForm';


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

ReactDOM.render(
  <LoginControl />,
  document.getElementById('login-control')
);

ReactDOM.render(
  <NameForm />,
  document.getElementById('form')
);

/**
 * Component and props demo
 */
function Welcome(props) {
  return <h3>Welcome, {props.name}</h3>;
}

const elementWelcomeProps = <Welcome name="Bhargavi" />

function ListItem(props) {
  //There is no need to specify key here
  return (
    <li>{props.value}</li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  // JSX style; embedding any expression withuout declaring variables.
  return(
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()} value={number} />
      )}
    </ul>
  )

  // const listItems = numbers.map((number) =>
    // key should be specified inside the array
    // <ListItem key={number.toString()} value={number} />
    // <li key={number.toString()}>{number}</li>
  // );

  // return (
  //   <ul>{listItems}</ul>
  // );
}

const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('numlist')
// );
const elementNumberList = <NumberList numbers={numbers} />


function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>{post.title}</li>
      )}
    </ul>
  );

  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World!', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'},
]

const elementBlogLists = <Blog posts={posts} />

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
        {elementNumberList}
        {elementBlogLists}
      </div>

    );
  }
}


export default App;
// export default Comment;
