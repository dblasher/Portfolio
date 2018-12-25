import React from 'react';
import { Grid } from '@material-ui/core';
import TicTac from '../projects/TicTac';
import Weather from '../projects/weather/Weather';


export default props =>
<Grid container>
    <Grid item sm>
    <TicTac/>
    </Grid>
    <Grid item sm>
    <Weather/>
    </Grid>
</Grid>