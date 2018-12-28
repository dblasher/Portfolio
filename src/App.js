import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Button,  Tabs, Tab, withStyles } from '@material-ui/core';
import { Footer } from './layouts';
import './App.css';
import About from './layouts/About';
import Projects from './projects';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    [theme.breakpoints.down('xs')]: {
      display: "grid",
    },
  },
});

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
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className="App">

        <div style={{ flexGrow: 2}}>
          <AppBar position="static" color="secondary" style={{display:"grid"}}>
            <Toolbar className={classes.root}>
              <Typography variant="title" color="inherit">
                Daniel Blasher
                </Typography>
              <Tabs value={value} onChange={this.handleChange}>
                <Tab label="About" />
                <Tab label="Projects" />
                <Tab label="Contact" />
              </Tabs>
            </Toolbar>
          </AppBar>
          {value === 0 && <TabContainer><About /></TabContainer>}
          {value === 1 && <TabContainer><Projects /></TabContainer>}
          {value === 2 && <TabContainer>Contact</TabContainer>}
        </div>
      </div>
    );
  }
  //---end render---

}

export default withStyles(styles)(App);
