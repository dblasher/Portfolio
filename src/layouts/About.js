import React, { Component } from 'react'
import { Paper, Avatar, Typography } from '@material-ui/core';
import Daniel from './Daniel.jpg';

class About extends Component {
    render() {
        return (
            <Paper>
                <Avatar src = {Daniel} style={{ width: 180, height: 180, margin: "auto", justifyContent:"center"}}/>
                <Typography variant="h5" component="h3">
                    Hi, I'm Daniel.
                </Typography>
                <Typography component="p">
          I can't wait to tell you all about myself. Stay Tuned!
        </Typography>
            </Paper>
        );
    }
}
export default About;