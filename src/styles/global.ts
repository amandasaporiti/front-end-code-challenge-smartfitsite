import { createGlobalStyle } from 'styled-components'

import GothamBlackWoff2 from '../assets/fonts/gotham-black.woff2'
import GothamBoldWoff2 from '../assets/fonts/gotham-bold.woff2'
import GothamBookWoff2 from '../assets/fonts/gotham-book.woff2'
import GothamLightWoff2 from '../assets/fonts/gotham-light.woff2'

export const GlobalStyles = createGlobalStyle`
  :root {
    --dark-grey: #333333;
    --light-grey: #808080;
    --yellow: #FFB612;
    --red: #dc0a17;
    --green: #2FC022;
  }

  @font-face {
    font-family: 'Gotham Black';
    src: url(${GothamBlackWoff2}) format('woff2');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham Bold';
    src: url(${GothamBoldWoff2}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham Book';
    src: url(${GothamBookWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham Light';
    src: url(${GothamLightWoff2}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    color: var(--dark-grey);
    background-color: white;
    font-family: 'Gotham Book', sans-serif;
  }

  button {
    cursor: pointer;
  }
`
