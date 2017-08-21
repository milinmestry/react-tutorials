import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './Form';
import AppTempratureCalc from './AppTempratureCalc';
import FilterableProductTable from './ThinkingInReact';
import Comment from './Comment';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Form />,
  document.getElementById('form')
);

ReactDOM.render(
  <AppTempratureCalc />,
  document.getElementById('temprature-calc')
);


var productsJson = [
  {category: 'Sport Goods', price: '$4.99', stocked: true, name: 'Football'},
  {category: 'Sport Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sport Goods', price: '$19.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$499.99', stocked: true, name: 'iPhone 6'},
  {category: 'Electronics', price: '$199.99', stocked: false, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={productsJson} />,
  document.getElementById('think-in-react')
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
