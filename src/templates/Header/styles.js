import styled from 'styled-components'

import { getTheme } from '../../theme'

const Header = styled.header`
  background-color: #ffffff;
  padding: 0 15px;
  box-shadow: 0px 0px 13px 0px rgba(82, 63, 105, 0.1);
  grid-area: header;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.3rem;
    font-weight: 500;
  }

  button {
    color: ${getTheme('primaryColor')};
    border: none;
    background: none;
    font-size: 1.2rem;
    font-family: inherit;
    cursor: pointer;
    outline: none;

    display: flex;
    align-items: center;

    svg {
      margin-left: 6px;
      margin-right: 6px;
    }
  }
`

export { Header }
