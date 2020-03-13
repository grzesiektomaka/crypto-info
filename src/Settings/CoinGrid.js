import React from 'react';
import styled from 'styled-components';
import {AppContext} from "../App/AppProvider";
import { Grid } from "@material-ui/core";
import CoinTile from "./CoinTile";

export const CoinGridStyled = styled.div`
    margin-top: 5em;
`
function getLowerSectionCoins(coinList, filteredCoins){
    return (filteredCoins && Object.keys(filteredCoins)) || Object.keys(coinList).slice(0, 100)
}

function getCoinsToDisplay(coinList, topSection, favorites, filterCoins){
    return topSection ? favorites : getLowerSectionCoins(coinList, filterCoins)
}

export default function({topSection}){
    return(
        <AppContext.Consumer>
                {({coinList, favorites, filteredCoins}) => (
                <CoinGridStyled>
                    <Grid container spacing={3}>
                    {getCoinsToDisplay(coinList, topSection, favorites, filteredCoins).map(coinKey =>
                        <Grid item xs={2}>
                            <CoinTile key={coinKey} topSection={topSection} coinKey={coinKey}/>                          
                        </Grid>   
                    )}
                    </Grid>
                </CoinGridStyled>)}
        </AppContext.Consumer>
    )
};