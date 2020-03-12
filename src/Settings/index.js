import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';
import CoinGrid from "./CoinGrid";
import { Grid } from "@material-ui/core";
import Search from './Search';

export default function(){
    return(
        <Page name="Settings">
            <Grid container  justify="center">
                <Grid item xs={12}>
                    <WelcomeMessage/>
                </Grid>
                <Grid item xs={12}>
                    <CoinGrid topSection />
                </Grid>
                <Grid item xs={2}>
                    <ConfirmButton/>
                </Grid>
                <Grid item xs={12}>
                    <Search/>
                </Grid>
                <Grid item xs={12}>
                    <CoinGrid/>
                </Grid>
            </Grid>
         </Page>
    )
};