import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar/navbar.js';
import LogIn from './form/login.js';
import SignUp from './form/signup.js';
import AllBooks from './books/allBooks.js';
import MyBooks from './books/myBooks.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <MyBooks />
        <AllBooks/>
      </div>
    );
  }
}

export default App;
