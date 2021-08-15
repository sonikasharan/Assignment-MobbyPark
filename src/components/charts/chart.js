import React from 'react'
import '../../../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines,VerticalGridLines, LineSeries} from 'react-vis';
const Chart = () => {
    const data=[
        { x:0,y:8},
        { x:1,y:6},
        { x:2,y:9},
        { x:3,y:5},
        { x:4,y:4},
        { x:5,y:3},
        { x:6,y:8},
        { x:7,y:7},
        { x:8,y:0},
    ]
    return (
        <div style={{marginTop:'15px'}}>
        <XYPlot height={600} width={600}>
            <VerticalGridLines/>
            <HorizontalGridLines/>
            <YAxis/>
            <XAxis/>
            <LineSeries data={data} color="red"/>
            <LineSeries data={data} color="purple"/>
            <LineSeries data={data} color="yellow"/>
        </XYPlot>
     
        
            
        </div>
    )
}
export default Chart;
