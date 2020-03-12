import React from 'react';
import styled from 'styled-components';
import {backgroundColor2, fontSize2} from "../Shared/Styles";
import fuzzy from 'fuzzy'
import _ from 'lodash';

import {AppContext} from "../App/AppProvider";

const SearchGrid = styled.div`

`
const SearchInput = styled.input`
    ${backgroundColor2},
    ${fontSize2},
    border: 1px solid;
    height: 25px;
    color: #1163c9;
    place-self: center left;
`

const handlerFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
    let coinSymbols = Object.keys(coinList);
    let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);
    let allStringsToSearch = coinSymbols.concat(coinNames);
    let fuzzyResults = fuzzy
        .filter(inputValue, allStringsToSearch, {})
        .map(result => result.string)

    let filteredCoins = _.pickBy(coinList, (result, symKey) => {
        let coinName = result.CoinName;
        return (_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName));
    });

    setFilteredCoins(filteredCoins);

}, 500);

function filterCoins(e, setFilteredCoins, coinList){
    let inputValue = e.target.value;
    if(!inputValue){
        setFilteredCoins(null);
        return;
    }
    handlerFilter(inputValue, coinList, setFilteredCoins)
}

export default function(){
    return(
        <AppContext.Consumer>
            {({setFilteredCoins, coinList}) => 
                <SearchGrid>
                    <h2>Search coins</h2>
                <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}/>
                </SearchGrid>
            }
        </AppContext.Consumer>
    )
}