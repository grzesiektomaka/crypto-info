import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from "../App/AppProvider";
import { Grid } from "@material-ui/core";
import CoinTile from "./CoinTile";

export const CoinGridStyled = styled.div`
    margin-top: 5em;
`
function getCoinsToDisplay(coinList){
    return Object.keys(coinList).slice(0, 100);
}

export default function(){
    return(
        <AppContext.Consumer>
                {({coinList}) => <CoinGridStyled>
                    <Grid container spacing={3}>
                    {getCoinsToDisplay(coinList).map(coinKey =>
                        <Grid item xs={2}>
                            <CoinTile coinKey={coinKey}/>                          
                        </Grid>   
                    )}
                    </Grid>
                </CoinGridStyled>}
        </AppContext.Consumer>
    )
};