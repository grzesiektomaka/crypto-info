import React from 'react';
import HighchartsConfig from './HighChartsConfig';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import ReactHighCharts from 'react-highcharts';

export default function(){
    return(
        <AppContext.Consumer>
            {({}) => 
                <Tile>
                    <ReactHighCharts config={HighchartsConfig()}/>
                </Tile>
            }
        </AppContext.Consumer>
    )
}

