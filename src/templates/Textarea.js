import styled from 'styled-components'

import formControl from '../hocs/formControl'

import { getTheme } from '../theme'

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  line-height: 24px;
  background: #ffffff;
  border: 1px solid #e2e5ec;
  border-radius: 4px;
  color: #48465b;
  padding: 6px 9px;
  font-size: 1rem;
  line-height: 20px;
  outline: none;
  resize: none;
  font-family: inherit;
  overflow: hidden;

  :disabled {
    background-color: #f7f8fa;
  }
  :focus {
    border-color: ${getTheme('primaryColor')};
  }
`

export default formControl(Textarea)
