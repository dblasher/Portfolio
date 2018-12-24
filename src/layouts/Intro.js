import React, { Component } from 'react'
import { Paper, Avatar, Typography } from '@material-ui/core';
import Daniel from './Daniel.jpg';

class Intro extends Component {
    render() {
        return (
            <Paper>
                <Avatar src = {Daniel} style={{ width: 180, height: 180, margin: "auto", justifyContent:"center"}}/>
                <Typography variant="h2">
                    Hi, I'm Daniel.
                </Typography>
                <Typography variant="h6" gutterBottom>
          Native Oregonian, Lucid Dreamer, and Web Developer
                 </Typography>  
            </Paper>
        );
    }
}
export default Intro;