import styled from 'styled-components'

export default styled.div`
  margin-left: -15px;
  margin-right: -15px;

  &:before,
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`
