import { createGlobalStyle } from 'styled-components'

import { getTheme } from './theme'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500&display=swappoppins');
  :root {
    font-size: ${getTheme('fontSize')}px;
  }
  * {
    margin: 0;
    padding: 0;
    position: relative;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background-color: ${getTheme('backgroundColor')};
    font: 400 1rem 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    color: ${getTheme('fontColor')};
  }
`
