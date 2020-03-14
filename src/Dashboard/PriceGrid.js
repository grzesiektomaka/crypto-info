import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../App/AppProvider';
import { Grid } from "@material-ui/core";
import PriceTile from './PriceTile';

const PriceG = styled.div`
    margin-top: 8em;
    margin-bottom: 3em;
`

export default function () {
    return (
        <AppContext.Consumer>
            {({prices}) => (
                <PriceG>
                    <Grid container spacing={3}>
                        {prices.map((price, index) => (
                            <Grid item xs={2}>
                                <PriceTile key={`priceTile-${index}`} index={index} price={price}/>
                            </Grid>
                        ))}
                    </Grid>
                </PriceG>
            )}
        </AppContext.Consumer>
    );
}