import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: grid;

  ${props => {
    if (!props.hasLabel) return

    if (props.inline) {
      return css`
        grid-template-rows: 1fr;
        grid-template-columns: 80px 1fr;
        align-items: center;
      `
    }

    return css`
      grid-template-rows: 21px 1fr;
      grid-template-columns: 1fr;
    `
  }}
`
