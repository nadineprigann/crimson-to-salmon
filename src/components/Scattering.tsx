import * as React from 'react';
import styled from '@emotion/styled-base';
import { keyframes } from '@emotion/core';

export const BlueWrapper = styled('div')`
    position: relative;
    width: 700px;
    height: 700px;
`

export const xPosition = Math.round(((Math.random() * 700) + 1) / 40) * 40;
export const yPosition = Math.round(((Math.random() * 700) + 1) / 40) * 40;
// Math.round(x / 10) * 10

const BlueScatter = keyframes`
  from, 0% {
    opacity: 0.9;
    top: 350px;
    left: 350px;
  }

  100% {
      opacity: 1;
      top: ${xPosition};
      left: ${xPosition};
  }

`;

export const ScatterElement = styled('div')`
    width: 35px;
    height: 35px;
    border-radius: 17.5px;
    background-color: blue;
    position: absolute;
    animation: ${BlueScatter} ease-out 10s;
`

export class BlueScattering extends React.Component {
    render() {
        const blueElements = [];

        for (let i = 0; i < 25; i++) {
            blueElements.push({
                xPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
                yPos: Math.round(((Math.random() * 700) + 1) / 40) * 40,
            });
        }

        return(
            <BlueWrapper>
                {blueElements.map( blueElement =>
                <ScatterElement style={{left: blueElement.xPos, top: blueElement.yPos}}/>
                )}
            </BlueWrapper>
        );
    }
}