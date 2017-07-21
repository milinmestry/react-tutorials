import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppTempratureCalc from './AppTempratureCalc';
import Comment from './Comment';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <AppTempratureCalc />,
  document.getElementById('temprature-calc')
);



const comment = {
  date: new Date(),
  text: "Hello Kitty! How are you doing?",
  author: {
    name: "Sameer Vora",
    avatarUrl: "http://placekitten.com/g/64/64",
  }
};

ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />,
  document.getElementById('comment')
);
