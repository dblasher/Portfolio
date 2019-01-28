import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import TicTac from '../projects/TicTac';
import Weather from '../projects/weather/Weather';


export default props =>
<Grid container>
    <Grid item sm>
    <Paper>
        <Typography variant="title" color="inherit">
            Tic Tac Toe
        </Typography>
    </Paper>
    <TicTac/>

    </Grid>
    <Grid item sm>
    <Paper>
        <Typography variant="title" color="inherit">
        7 Day Forecast using Open Weather Map Api
        </Typography>
    </Paper>
    <Weather/>
    </Grid>
</Grid>