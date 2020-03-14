import React from 'react';
import Page from '../Shared/Page';
import PriceGrid from "../Dashboard/PriceGrid";
import CoinSpotlight from "./CoinSpotlight";
import PriceChart from './PriceChart';
import { Grid } from "@material-ui/core";


export default function(){
    return(
        <Page name="Dashboard">
            <PriceGrid/>
            <Grid container>
                <Grid item xs={12}/>
                <Grid item xs={3}>
                    <CoinSpotlight/>
                </Grid>
                <Grid item xs={9}>
                    <PriceChart/>
                </Grid>
            </Grid>      
         </Page>
    )
};