import styled, { css } from 'styled-components'

import { getTheme } from '../theme'

export default styled.button`
  border: none;
  font-family: inherit;
  outline: none;
  padding: 8px 12px;
  border-radius: 3px;
  font-size: 0.85rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

  ${({ primary = false }) => {
    if (primary) {
      return css`
        background-color: ${getTheme('primaryColor')};
        color: white;
      `
    }

    return css`
      background-color: transparent;
      color: ${getTheme('fontColor')};
    `
  }}

  &:not(:disabled) {
    cursor: pointer;
  }
  &:disabled {
    filter: grayscale(0.8);
  }
  & + & {
    margin-left: 5px;
  }
`
