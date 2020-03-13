import React from 'react';
import Page from '../Shared/Page';
import PriceGrid from "../Dashboard/PriceGrid";
import CoinSpotlight from "./CoinSpotlight";

import { Grid } from "@material-ui/core";


export default function(){
    return(
        <Page name="Dashboard">
            <Grid container>
                <PriceGrid/>
                <Grid item xs={3}>
                    <CoinSpotlight/>
                </Grid>
                <Grid item xs={9}>
                    knkjnfwnkn
                </Grid>
            </Grid>      
         </Page>
    )
};