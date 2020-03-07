import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import {fontSize1, greenBoxShadow, color3} from "../Shared/Styles";

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: ${color3}
    ${fontSize1}
    padding: 5px;
    cursor: pointer;
    text-align: center;
    &:hover {
        ${greenBoxShadow}
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