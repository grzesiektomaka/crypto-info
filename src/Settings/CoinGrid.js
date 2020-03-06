import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from "../App/AppProvider";
import { Grid } from "@material-ui/core";

export const CoinGridStyled = styled.div`

`

export default function(){
    return(
        <AppContext.Consumer>

                {({coinList}) => <CoinGridStyled>
                    <Grid container>
                    {Object.keys(coinList).map(coinKey =>
                        <Grid item xs={2}>
                            {coinKey}
                        </Grid>   
                    )}
                    </Grid>
                </CoinGridStyled>}
           
        </AppContext.Consumer>
    )
}