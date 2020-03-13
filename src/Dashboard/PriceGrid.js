import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../App/AppProvider';
import { Grid } from "@material-ui/core";
import PriceTile from './PriceTile';


export default function () {
    return (
        <AppContext.Consumer>
            {({prices}) => (
                <Grid container spacing={3}>
                        {prices.map((price, index) => (
                            <Grid item xs={2}>
                                <PriceTile key={`priceTile-${index}`} index={index} price={price}/>
                            </Grid>
                        ))}
                </Grid>
            )}
        </AppContext.Consumer>
    );
}