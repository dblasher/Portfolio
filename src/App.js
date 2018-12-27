import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Button,  Tabs, Tab } from '@material-ui/core';
import { NavBar, Footer } from './layouts';
import './App.css';
import Intro from './layouts/Intro';
import About from './layouts/About';
import Projects from './projects';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class App extends Component {
  state = {
    value: 0,
};

handleChange = (event, value) => {
    this.setState({ value });
};
  //---begin render---
  render() {

    const { value } = this.state;
    return (
      <div className="App">

        <div style={{ flexGrow: 2 }}>
          <AppBar position="static" color="secondary">
            <Toolbar>
              <Typography variant="title" color="textPrimary">
                Daniel Blasher
                </Typography>
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label="About" />
                <Tab label="Projects" />
                <Tab label="Contact" />
              </Tabs>
            </Toolbar>
          </AppBar>
          {value === 0 && <TabContainer><Intro /><About /></TabContainer>}
          {value === 1 && <TabContainer><Projects /></TabContainer>}
          {value === 2 && <TabContainer>Contact</TabContainer>}
        </div>
        <Footer />
      </div>
    );
  }
  //---end render---

}

export default App;
