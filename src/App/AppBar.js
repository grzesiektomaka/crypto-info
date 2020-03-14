import React from 'react';
import styled, {css} from 'styled-components';
import { Grid } from "@material-ui/core";
import { AppContext } from "./AppProvider";

const Logo = styled.div`
    font-family: 'Orbitron', sans-serif;
    font-size: 1.5em;
    padding-left: 3em;
`

const Bar = styled.div`
    background-color: #2b2c3b;
    height: 3em;
    padding-top: 3.5em;
    padding-bottom: 2em;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const ControllButtonElem = styled.div`
    color: #595b6a;
    cursor: pointer;
    padding-left: 100px;
    ${props => props.active && css`
        color: #0177d0;
    `};
    ${props => props.hidden && css`
        display: none;
    `}
    ${props => props.align && css`
        text-align: right;
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
                    align={name === 'Dashboard'}
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