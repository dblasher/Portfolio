import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@material-ui/core';
import './NavBar.css';
import Intro from './Intro';
import About from './About';
import Projects from '../projects';

//red #ef104c
//green #10ed40

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

class NavBar extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const { value } = this.state;
        //const { classes } = this.props;
        return (
            <div style={{ flexGrow: 2 }}>
                <AppBar position="static" color = "secondary">
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
                {value === 0 && <TabContainer><Intro/><About/></TabContainer>}
                {value === 1 && <TabContainer><Projects/></TabContainer>}
                {value === 2 && <TabContainer>Contact</TabContainer>}
            </div>
        )
    }
}
export default NavBar;
//line 52 {value === 1 && <TabContainer><div className="projectHeader">Tic Tac Toe!</div><TicTac/><div className="projectHeader">Weather!</div><Weather/></TabContainer>}
