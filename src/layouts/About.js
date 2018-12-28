import React, { Component } from 'react'
import { Paper, Avatar, Typography, Grid } from '@material-ui/core';
import Daniel from './Daniel.jpg';

class Intro extends Component {
    render() {
        return (
            <Grid container justify="center" alignItems="center">
                <Grid item sm>
                    <Avatar src={Daniel} style={{ width: 250, height: 250, margin: "auto" }} />
                </Grid>
                <Grid item sm>
                    <Typography variant="h2">
                        Hi, I'm Daniel
                </Typography>
                    <Typography variant="h6" gutterBottom>
                    Web Developer bringing my talents to Portland, Oregon
                 </Typography>
                </Grid>
                <Paper style={{ padding: 24 }}>
                <Typography variant="h5" gutterBottom>
                        I enjoy working with teams building customer facing web applications using modern Javascript, C#, and SQL. 
                </Typography>
                    <Typography variant="h6" gutterBottom>
                        Bla bla bla
                </Typography>
                </Paper>
                <Paper style={{ padding: 24 }}>
                    <Typography variant="h5" gutterBottom>
                        Programming is the latest meal in my endless hunger of science, technology, and wonder.
                </Typography>
                    <Typography variant="h6" gutterBottom>
                        As a child I first snacked on Astronomy by learning the solar system, fathoming the enormity of the Sun,
                        and terrifying myself by wondering, what's outside of the Universe?
                </Typography>
                    <Typography variant="h6" gutterBottom>
                        As a teenager I was nourished by the vast and mystifying realm of dreams and unconscious. I read Carl Jung, experienced Sleep Paralysis,
                        discovered Richard Linklater's film Waking life, and tested the limits of my mind through lucid dreaming.
                </Typography>
                    <Typography variant="h6">
                        In college I served myself a helping of psychology and neuroscience, I wanted to understand how delicate and powerful the human mind is.
                </Typography>
                </Paper>

            </Grid>
        );
    }
}
export default Intro;