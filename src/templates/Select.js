import styled from 'styled-components'

import { getTheme } from '../theme'

import formControl from '../hocs/formControl'

const Select = styled.select`
  display: block;
  width: 100%;
  height: 34px;
  background: #ffffff;
  border: 1px solid #e2e5ec;
  border-radius: 4px;
  color: #48465b;
  padding: 6px 9px;
  font-size: 1rem;
  line-height: 20px;
  outline: none;

  :disabled {
    background-color: #f7f8fa;
  }
  :focus {
    border-color: ${getTheme('primaryColor')};
  }
`

export default formControl(Select)
