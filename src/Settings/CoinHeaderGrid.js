import React from 'react';
import styled from 'styled-components';
import { Grid } from "@material-ui/core";

export const CoinHeaderGridStyled = styled.div`

`
export const CoinSymbol = styled.div`
    text-align: right;
`

export default function({name, symbol}){
    return (
    <CoinHeaderGridStyled>
        <Grid container>
            <Grid item xs={6}>
                {name}
            </Grid>
            <Grid item xs={6}>
                <CoinSymbol>{symbol}</CoinSymbol>
            </Grid>
        </Grid>
    </CoinHeaderGridStyled>
    )
}