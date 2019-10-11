import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { getTheme } from '../../theme'

const Button = styled(Link)`
  background-color: ${getTheme('primaryColor')};
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;

  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: ${getTheme('zIndex.fab')};

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  outline: none;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`

export { Button }
