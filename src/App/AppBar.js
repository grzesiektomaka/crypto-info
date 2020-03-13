import React from 'react';
import styled, {css} from 'styled-components';
import { Grid } from "@material-ui/core";
import { AppContext } from "./AppProvider";

const Logo = styled.div`
    font-family: 'Orbitron', sans-serif;
    font-size: 1.5em;
`

const Bar = styled.div`
    // display: grid;
`
const ControllButtonElem = styled.div`
    cursor: pointer;
    ${props => props.active && css`
        color: blue;
    `};
    ${props => props.hidden && css`
        display: none;
    `}
`
function ControllButton({name}){
    return(
        <AppContext.Consumer>
            {({firstVisit, page, setPage}) => (
                <ControllButtonElem 
                    active={page === name}
                    onClick={() => setPage(name)}
                    hidden={firstVisit && name === 'Dashboard'}
                >
                     {name}
                 </ControllButtonElem>
            )}
        </AppContext.Consumer>
    )
}

export default function(){
    return(
        <Bar>
            <Grid container>
                <Grid item xs={8}>
                    <Logo>CRYPTO - ₿OARD</Logo>
                </Grid>
                <Grid item xs={2}>
                    <ControllButton name="Dashboard"/>
                </Grid>
                <Grid item xs={2}>
                    <ControllButton name="Settings"/>
                </Grid>
            </Grid>
        </Bar>
    )
};