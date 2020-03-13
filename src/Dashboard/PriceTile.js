import React from 'react';
import styled, {css} from 'styled-components';
import {SelectableTile} from '../Shared/Tile'; 
import {fontSize3, fontSizeBig} from '../Shared/Styles';
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
`

function ChangePercent({data}){
    return(
            <ChangePct red={data.CHANGEPCT24HOUR < 0}>
            {numberFormat(data.CHANGEPCT24HOUR)}
            </ChangePct>
    );
}

function PriceTile({sym, data}){
    return (
        <PriceTileStyled>
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

function PriceTileCompact({sym, data}){
    return (
        <PriceTileStyled compact>
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
            <TileClass sym={sym} data={data}/>
    )
}