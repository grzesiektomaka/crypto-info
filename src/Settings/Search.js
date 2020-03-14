import React from 'react';
import styled from 'styled-components';
import {backgroundColor2} from "../Shared/Styles";
import fuzzy from 'fuzzy'
import _ from 'lodash';

import {AppContext} from "../App/AppProvider";

const SearchGrid = styled.div`
    text-align: center;
    margin-top: 3.5em;
    padding-top: 3em;
    border-top: 1.5px solid #0177d0;
`
const SearchInput = styled.input`
    height: 2em;
    width: 20em;
    color: #e4e4e4;
    border-radius: 10px;
    border: none;
    ${backgroundColor2};
    padding: 10px;
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