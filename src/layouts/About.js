import React, { Component } from 'react'
import { Paper, Typography } from '@material-ui/core';

class About extends Component {
    render() {
        return (
            <Paper>
                <Typography variant="h5" gutterBottom>
                    Programming is the latest meal in my endless hunger of science, technology, and wonder.
                </Typography>
                <Typography variant="h6" align = "left" color="error" gutterBottom>
                    As a child I first snacked on Astronomy by learning the solar system, fathoming the enormity of the Sun,
                    and terrifying myself by wondering, what's outside of the Universe? 
                </Typography>
                <Typography variant="h6" align = "left" gutterBottom>
                As a teenager I was nourished by the vast and mystifying realm of dreams and unconscious. I read Carl Jung, experienced Sleep Paralysis,
                discovered Richard Linklater's film Waking life, and tested the limits of my mind through lucid dreaming. 
                </Typography>
                <Typography variant="h6" align = "left">
                In college I served myself a helping of psychology and neuroscience, I wanted to understand how delicate and powerful the human mind is.  
                </Typography>
            </Paper>
        );
    }
}
export default About;