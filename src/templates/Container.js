import styled, { css } from 'styled-components'

import Navigation from './Navigation'

export default styled.div`
  min-height: 100%;
  display: grid;
  grid-row-gap: 15px;
  grid-template-rows: 75px 1fr 35px;

  ${() => {
    if (window.user.type === 'C') {
      return css`
        grid-template-columns: 1fr;
        grid-template-areas:
          'header'
          'content'
          'footer';
      `
    }

    return css`
      grid-template-columns: 250px 1fr;
      grid-template-areas:
        'navigation header'
        'navigation content'
        'navigation footer';

      @media (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-template-areas:
          'header'
          'content'
          'footer';
      }
    `
  }}

  ${() => {
    if (window.user.type === 'C') {
      return css`
        ${Navigation} {
          display: none;
        }
      `
    }
  }}

  main {
    grid-area: content;
  }
`
