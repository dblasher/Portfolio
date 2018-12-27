import React, { Component } from 'react';
import { NavBar, Footer } from './layouts';
import './App.css';
import TopNav from './layouts/TopNav';

class App extends Component {

  //---begin render---
  render() {
    return (
      <div className="App">
        <TopNav/>
        <NavBar />
        <Footer />
      </div>
    );
  }
  //---end render---

}

export default App;
