import React from 'react';
import styled, {css} from 'styled-components';
import {SelectableTile} from '../Shared/Tile'; 
import {fontSize3, fontSizeBig, greenBoxShadow} from '../Shared/Styles';
import {AppContext} from "../App/AppProvider";
import { Grid } from "@material-ui/core";


const numberFormat = number => {
    return +(number + '').slice(0,7);
}


const TickerPrice = styled.div`
    ${fontSizeBig};
`
const ChangePct = styled.div`
    color: green;
    ${props => props.red && css`
        color: red;
    `}
`

const PriceTileStyled = styled(SelectableTile)`
    ${props => props.compact && css`
        ${fontSize3}
    `}
    
    ${props => props.currentFavorite && css`
        ${greenBoxShadow};
        pointer-events: none;
    `}
`

function ChangePercent({data}){
    return(
            <ChangePct red={data.CHANGEPCT24HOUR < 0}>
            {numberFormat(data.CHANGEPCT24HOUR)}
            </ChangePct>
    );
}

function PriceTile({sym, data, currentFavorite, setCurrentFavorite}){

    return (
        <PriceTileStyled onClick={setCurrentFavorite} currentFavorite={currentFavorite}>
            <Grid container>
                <Grid item xs={7}>
                        <div>{sym}</div>
                    </Grid>
                    <Grid item xs={5}>
                        <ChangePercent data={data}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TickerPrice>
                            {numberFormat(data.PRICE)}
                        </TickerPrice>
                </Grid>
            </Grid>
        </PriceTileStyled>
    );
}

function PriceTileCompact({sym, data, currentFavorite, setCurrentFavorite}){
    return (
        <PriceTileStyled onClick={setCurrentFavorite} compact currentFavorite={currentFavorite}>
            <Grid container>
                <Grid item xs={2}>
                        <div>{sym}</div>
                    </Grid>
                    <Grid item xs={4}>
                        <ChangePercent data={data}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TickerPrice>
                            {numberFormat(data.PRICE)}
                        </TickerPrice>
                </Grid>
            </Grid>
        </PriceTileStyled>
    );
}

export default function({price, index}){
    let sym = Object.keys(price)[0];
    let data = price[sym]['USD'];
    let TileClass = index < 6 ? PriceTile : PriceTileCompact;
    return (
        <AppContext.Consumer>
            {({currentFavorite, setCurrentFavorite}) =>
                <TileClass 
                    sym={sym} 
                    data={data} 
                    currentFavorite={currentFavorite === sym}
                    setCurrentFavorite={() => setCurrentFavorite(sym)}
                />
            }
        </AppContext.Consumer>
    )
}