import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import {fontSize1, color3} from "../Shared/Styles";

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: ${color3}
    ${fontSize1}
    padding: 5px;
    cursor: pointer;
    text-align: center;
    background-color: #0177d0;
    border-radius: 10px;
    padding: 10px;
    margin-top: 4em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover {
        background-color: #004880;
    }
`

// export const CenterDiv = styled.div`
//     dis
// `

export default function() {
    return <AppContext.Consumer>
        {({confirmFavorites}) => 
            <ConfirmButtonStyled onClick={confirmFavorites}>
                CONFIRM FAVORITES
            </ConfirmButtonStyled>
        }
    </AppContext.Consumer>
};