import styled from '@emotion/styled-base';
import { small, medium } from './breakpoints';

// Colors

export const TextColor = '#322C2C';
export const LabelColor = '#8B7F7F';
export const MainRed = '#FF5555';
export const AirColorLight = '#d7e2ef';
export const AirColorDark = 'a4b9d2';

// Typography

export const Chapter = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
`

export const ParagraphStory = styled('p')`
  line-height: 120%;
  color: ${TextColor};
  width: 40%;
//   @media (max-width: ${small}px)  {
//       font-size: 1rem;
//   };

//   @media (min-width: ${small}px) and (max-width: ${medium}px) {
//       font-size: 1.1rem;
//   };

//   @media (min-width: ${medium}px) {
//       font-size: 1.2rem;
//   };
`;

// Intro

export const IntroHeading = styled('div')`
    font-family: 'IBM Plex Sans';
    font-weight: 700;
    font-size: 3em;
    color: ${TextColor};
`

export const Intro1 = styled('h1')`
    position: absolute;
    top: 10vh;

    @media (max-width: ${small}px)  {
        left: 10vw;   
    };
        
    @media (min-width: ${small}px) and (max-width: ${medium}px) {
        left: 20vw;
    };

    @media (min-width: ${medium}px) {
        left: 40vh;
    };
`

export const Intro2 = styled('h1')`
    position: absolute;
    top: 40vh;
    left: 40vw;

    @media (max-width: ${small}px)  {
        left: 20vw;
    };
`

export const Intro3 = styled('h1')`
    position: absolute;
    top: 45vh;
    left: 40vw;

    @media (max-width: ${small}px)  {
        left: 20vw;
      };
`

export const Intro4 = styled('h1')`
    position: absolute;
    top: 50vh;
    left: 40vw;

    @media (max-width: ${small}px)  {
       left: 20vw;
    };
`

// World

export const ElementTitle = styled('div')`
    font-family: 'IBM Plex Sans';
    font-weight: 500;
    font-size: 1em;
    color: ${TextColor};
    margin: 0.5rem 0 0 0.5rem;
`

export const ElementSubtitle = styled('div')`
    font-family: 'IBM Plex Sans';
    font-weight: 500;
    font-size: 1em;
    color: ${TextColor};
    margin: 0 0 0 0.5rem;
`

// Initiatives

export const InitiativesTitle = styled('p')`
    font-family: 'IBM Plex Sans';
    font-weight: 500;
    font-size: 2em;
    color: ${TextColor};
    margin: 1rem 1rem 0 1rem;
    display: block;

`

// export const InitiativesSubtitle = styled('div')`
//     font-family: 'IBM Plex Sans';
//     font-weight: 500;
//     font-size: 2em;
//     color: ${TextColor};
//     margin: 0 0 0 1rem;
// `
