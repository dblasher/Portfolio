import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@material-ui/core';
import About from './About';


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

        return (
            <div style={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Daniel Blasher
                </Typography>
                        <Tabs value={value} onChange={this.handleChange}>
                            <Tab label="About" />
                            <Tab label="Projects" />
                            <Tab label="Contact" href="#basic-tabs" />
                        </Tabs>

                    </Toolbar>
                </AppBar>
                {value === 0 && <About/>}
                {value === 1 && <TabContainer>Projects</TabContainer>}
                {value === 2 && <TabContainer>Contact</TabContainer>}
            </div>
        )
    }
}
export default NavBar;