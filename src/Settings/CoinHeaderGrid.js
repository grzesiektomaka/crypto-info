import React from 'react';
import styled from 'styled-components';
import { Grid } from "@material-ui/core";
import {DeletableTile} from "../Shared/Tile"

export const CoinHeaderGridStyled = styled.div`

`
export const CoinSymbol = styled.div`
    text-align: right;
`

const DeleteIcon = styled.div`
    justify-self: right;
    display: none;
    ${DeletableTile}:hover & {
        display: block;
        color: red;
    }
`

export default function({name, symbol, topSection}){
    return (
    <CoinHeaderGridStyled>
        <Grid container>
            <Grid item xs={6}>
                {name}
            </Grid>
            <Grid item xs={6}>
                {topSection ? (
                    <DeleteIcon>X</DeleteIcon>
                ) : (<CoinSymbol>{symbol}</CoinSymbol>)}
            </Grid>
        </Grid>
    </CoinHeaderGridStyled>
    )
}