import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: green;
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
}