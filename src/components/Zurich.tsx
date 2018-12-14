import * as React from 'react';
import { VizWrapper, ElementTitle, MainRed, AirBlueLight } from 'src/materials/materials';
import { SquareWrapper } from 'src/components/Countries';
import ZurichGradientSVG  from '../zh_gradient.svg';
import DetailGradientSVG from '../detail_gradient.svg'
import { Legend, LegendItem } from './Legends';
import styled from '@emotion/styled-base';
import { scaleLinear } from 'd3-scale';
import { keyframes } from '@emotion/core';


export class Switzerland extends React.Component {
    render() {
        return (
            <>
            <SquareWrapper>
               
               
                <VizWrapper style={{backgroundImage: "url(" + DetailGradientSVG + ")"}}>
                    <ElementTitle>Switzerland</ElementTitle>
                </VizWrapper>
            
                <Legend>
                    <LegendItem>6.2</LegendItem>
                    <LegendItem>⟶ Fine particles in 2016 (µg / m²)</LegendItem>
                    <LegendItem>24</LegendItem>
                </Legend>            
            </SquareWrapper>   
                </>
        );
    }
}

export const ValueRange = styled('div')`
    display: flex;
    align-items: space-between;
    position: absolute;
    opacity: 0.8;
`

// add annotation that there are days when no data was recorded (NaN).
// smallest and largest values can be hardcoded but having data on hand calls for using it. attention: current design macht, dass man glaubt, dass die station generell über dem limitwert ist. dabei sind es im falle der stampfenbachstrasse gerade mal 25 tage in 2016. irgendwo vermerken?

// use max value of countries data set from 2016. here hardcoded with value 292...
// on hover show the two values? or number of days how high and low values within 2016? 

const size = scaleLinear()
    .domain([0, 292])
    .rangeRound([1, 700] as any)


// export class ZurichGradient extends React.Component {
//     render() {
//         return (
//                 <SquareWrapper>
//                     <VizWrapper style={{mask: "url(" + ZurichGradientSVG + ")"}}>                
//                         {/* Rosengartenstrasse */}
//                         <ValueRange style={{backgroundImage: "url(" + ZurichGradientSVG + ")", top: 0, left: size(3.56), width: size(81.99 - 3.56)}}/>

//                         {/* Schimmelstrasse */}
//                         <ValueRange style={{backgroundImage: "url(" + ZurichGradientSVG + ")", top: 235, left: size(1.94), width: size(66.27 - 1.94)}}/>

//                         {/* Stampfenbachstrasse */}
//                         <ValueRange style={{backgroundImage: "url(" + ZurichGradientSVG + ")", top: 470, left: size(3.38), width: size(56 - 3.38)}}/>
//                         <LimitValues />
//                     </VizWrapper>
//                     <Legend>
//                         <LegendItem>0</LegendItem>
//                         <LegendItem>⟶ PM 10 per Year (µg / m²)</LegendItem>
//                         <LegendItem>292</LegendItem>
//                     </Legend>                
//                 </SquareWrapper>
//         );
//     }
// }

const ValueRangeHeight = 230;

export const ValueRangeDetail= styled('div')`
    position: absolute;
    background-color: ${MainRed};
`
const sizeMonthly = scaleLinear()
    .domain([0, 81.99])
    .rangeRound([1, 700] as any)

export type Station = {
    Station: string, 
    Month: string,
    Max: number,
    Min: number,
}

export interface Props {
    stations: Array<Station>
    Animation: boolean;
}

// max ZH value: 81.99 results in color value of 200, 153, 183 in range of world countries

export class Zurich extends React.Component<Props> {
    render() {
        return (
                <SquareWrapper>
                    <VizWrapper >                
                        {/* Rosengartenstrasse */}
                            <ValueRange >
                            {this.props.stations.filter(function (i) {return (i.Station === "Rosengartenstrasse")}).map((station, i) => 
                            <ValueRangeDetail key={i} style={{backgroundImage: "url(" + DetailGradientSVG + ")", mask: "url(" + ZurichGradientSVG + ")", height: ValueRangeHeight / 12, top: ValueRangeHeight / 12 * i, left: sizeMonthly(station.Min), width: sizeMonthly((station.Max - station.Min))}}>
                            {station.Month}
                            </ValueRangeDetail>
                            )}
                            </ValueRange>

                        {/* Schimmelstrasse */}
                        <ValueRange style={{height: ValueRangeHeight, top: 235, left: size(1.94), width: size(66.27 - 1.94)}}>
                            {this.props.stations.filter(function (i) {return (i.Station === "Schimmelstrasse")}).map((station, i) => 
                            <ValueRangeDetail key={i} style={{backgroundImage: "url(" + DetailGradientSVG + ")", mask: "url(" + ZurichGradientSVG + ")", height: ValueRangeHeight / 12, top: ValueRangeHeight / 12 * i, left: sizeMonthly(station.Min), width: sizeMonthly((station.Max - station.Min))}}>
                            {station.Month}
                            </ValueRangeDetail>
                            )}
                        </ValueRange>

                        {/* Stampfenbachstrasse */}
                        <ValueRange style={{height: ValueRangeHeight, top: 470, left: size(3.38), width: size(56 - 3.38)}}>
                            {this.props.stations.filter(function (i) {return (i.Station === "Stampfenbachstrasse")}).map((station, i) => 
                            <ValueRangeDetail key={i} style={{backgroundImage: "url(" + DetailGradientSVG + ")", mask: "url(" + ZurichGradientSVG + ")", height: ValueRangeHeight / 12, top: ValueRangeHeight / 12 * i, left: sizeMonthly(station.Min), width: sizeMonthly((station.Max - station.Min))}}>
                            {station.Month}
                            </ValueRangeDetail>
                            )}
                        </ValueRange>
                        <LimitValues runAnimation={this.props.Animation}/>
                    </VizWrapper>
                    <Legend>
                        <LegendItem>6.2</LegendItem>
                        <LegendItem>⟶ Fine particles in 2016 (µg / m²)</LegendItem>
                        <LegendItem>81.99</LegendItem>
                    </Legend>                
                </SquareWrapper>
        );
    }
}

const LimitIndex = keyframes`
  from, 0% {
    left: 700px;
    opacity: 0;
  }

  30% {
    left: 333px;
    opacity: 1;
  }
`;

export const LimitIndicator = styled('div')`
    position: absolute;
    height: 700px;
    width: 5px;
    background-color: black;
    animation: ${LimitIndex} 10s infinite;
    `

const LimitAreas = keyframes`
    from, 80% {
      opacity: 0;
    }
  
    100% {
      opacity: 0.3;
    }
  `;
    

export const LimitAreaLeft = styled('div')`
    position: absolute;
    height: 700px;
    top: 0;
    left: 0;
    background-color: ${AirBlueLight};
    opacity: 0.3;
    animation: ${LimitAreas} 10s ease infinite;
`

export const LimitAreaRight = styled('div')`
    position: absolute;
    height: 700px;
    top: 0;
    left: 0;
    background-color: ${MainRed};
    opacity: 0.3;
    animation: ${LimitAreas} 10s ease infinite;
`

export class LimitValues extends React.Component<{ runAnimation: boolean }> {
    render() {
        return(
            <>
            <LimitAreaLeft style={{width: sizeMonthly(20), animationPlayState: this.props.runAnimation ? 'running' : 'paused' }}/>
            <LimitAreaRight style={{left: sizeMonthly(20), width: sizeMonthly(61.99), animationPlayState: this.props.runAnimation ? 'running' : 'paused'}}/>
            <LimitIndicator style={{left: sizeMonthly(20), animationPlayState: this.props.runAnimation ? 'running' : 'paused'}}/>
            </>
        );
    }
}

