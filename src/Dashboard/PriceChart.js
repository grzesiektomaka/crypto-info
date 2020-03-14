import React from 'react';
import HighchartsConfig from './HighChartsConfig';
import {Tile} from '../Shared/Tile';
import {AppContext} from '../App/AppProvider';
import ReactHighcharts from 'react-highcharts';
import HighchartsTheme from './HighChartsTheme';
import ChartSelect from './ChartSelect';
import styled from 'styled-components';

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

const Chart = styled.div`
    width: 90%
`

export default function(){
    return(
        <AppContext.Consumer>
            {({historical, changeChartSelect}) => 
                <Tile>
                    {historical ? 
                        <>
                        <ChartSelect
                            defaultValue={"months"}
                            onChange={e => changeChartSelect(e.target.value)}
                         >
                            <option value="days">Days</option>
                            <option value="weeks">Weeks</option>
                            <option value="months">Months</option>
                        </ChartSelect>
                        <Chart><ReactHighcharts config={HighchartsConfig(historical)}/></Chart>
                        </>
                        : <div>Loading Historical Data</div>
                    }
                </Tile>
            }
        </AppContext.Consumer>
    )
}

