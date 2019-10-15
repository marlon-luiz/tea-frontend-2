import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { getTheme } from '../../theme'

const Button = styled.button`
  background-color: #ffffff;
  width: 32px;
  height: 32px;
  font-size: 16px;
  border: 1px currentColor solid;
  border-radius: 4px;
  cursor: pointer;

  ${props => {
    switch (true) {
      case props.error:
        return css`
          color: ${getTheme('errorColor')};
        `
      case props.success:
        return css`
          color: ${getTheme('successColor')};
        `
      default:
        return css`
          color: ${getTheme('primaryColor')};
        `
    }
  }}

  & + &, & + ${A} {
    margin-left: 5px;
  }
`

const A = styled(Link)`
  background-color: #ffffff;
  width: 32px;
  height: 32px;
  font-size: 16px;
  border: 1px currentColor solid;
  border-radius: 4px;
  vertical-align: top;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${props => {
    switch (true) {
      case props.error:
        return css`
          color: ${getTheme('errorColor')};
        `
      case props.success:
        return css`
          color: ${getTheme('successColor')};
        `
      default:
        return css`
          color: ${getTheme('primaryColor')};
        `
    }
  }}

& + &, & + ${Button} {
    margin-left: 5px;
  }
`

export { Button, A as Link }
