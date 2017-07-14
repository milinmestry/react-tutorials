import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Comment from './Comment';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



const comment = {
  date: new Date(),
  text: "Hello Kitty! How are you doing?",
  author: {
    name: "Raanbir kappoor",
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
