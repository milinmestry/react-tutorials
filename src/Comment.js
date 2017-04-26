import React from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';


function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img
      className="avatar"
      src={props.user.avatarUrl}
      alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="userInfo">
      <Avatar user={props.user} />
      <div className="userInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={props.author} />
      <div className="comments-text">
        {props.text}
      </div>
      <div className="comments-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

export default Comment;
