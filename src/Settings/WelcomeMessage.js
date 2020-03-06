import React from 'react';
import { AppContext } from "../App/AppProvider";

export default function({firstVisit}) {
    return(
        <AppContext.Consumer>
            {({firstVisit}) =>
                firstVisit ? <div> Welcome to CRYPTO BOARD, plese select your coins to begin. </div> : null
            }
        </AppContext.Consumer>
    )
}