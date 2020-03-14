import React from 'react';
import {AppContext} from "../App/AppProvider";
import{Tile} from "../Shared/Tile";
import styled from 'styled-components';
import CoinImage from "../Shared/CoinImage";

const CoinInfo = styled(Tile)`
    width: 90%;
    text-align: center;
    padding-bottom: 2em;
`

export default function() {
    return (
        <AppContext.Consumer>
            {({currentFavorite, coinList}) => 
                <CoinInfo> 
                    <h2>{coinList[currentFavorite].CoinName}</h2>
                    <CoinImage spotlight coin={coinList[currentFavorite]}/>
                </CoinInfo>
            }
        </AppContext.Consumer>
    )
}