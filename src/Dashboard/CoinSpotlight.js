import React from 'react';
import {AppContext} from "../App/AppProvider";
import {Tile} from "../Shared/Tile";
import CoinImage from "../Shared/CoinImage";

export default function() {
    return (
        <AppContext.Consumer>
            {({currentFavorite, coinList}) => 
                <Tile> 
                    <h2>{coinList[currentFavorite].CoinName}</h2>
                    <CoinImage spotlight coin={coinList[currentFavorite]} />
                    {currentFavorite}
                </Tile>
            }
        </AppContext.Consumer>
    )
}