import React, { Component } from 'react';
import { NavBar, Footer } from './layouts';
import './App.css';

class App extends Component {

  //---begin render---
  render() {
    return (
      <div className="App">
        <NavBar />
        <Footer />
      </div>
    );
  }
  //---end render---

}

export default App;
