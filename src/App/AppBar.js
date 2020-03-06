import React from 'react';
import styled from 'styled-components';
import { Grid } from "@material-ui/core";


const Bar = styled.div`
    // display: grid;
`


export default function(){
    return(
        <Bar>
            <Grid container>
                <Grid item xs={8}>
                    CryptoInfo
                </Grid>
                <Grid item xs={2}>
                    Dashboard
                </Grid>
                <Grid item xs={2}>
                    Settings
                </Grid>
            </Grid>
        </Bar>
    )
}